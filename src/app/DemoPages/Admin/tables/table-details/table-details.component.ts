import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {FormService} from "../../../../services/form.service";
import {
  DataHeaderResponse,
  DataResponse,
  FormResponse,
  SingleObjectResponse,
  TableDetailsResponse, TableStateResponse
} from "../../../../models/user";
import {GeneralService} from "../../../../services/general.service";
import {main} from "@angular/compiler-cli/src/main";
import {forEach} from "ag-grid-community/dist/lib/utils/array";
import {save} from "ionicons/icons";
import {ToastrService} from "ngx-toastr";
import Swal from "sweetalert2";

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnInit {
  gridId;
  id;
  private gridApi;
  private gridColumnApi;
  rowClassRules;
  colClassRules;
  defaultColDef;
  sideBar;
  statusBar;

  ColumnAddForm;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  columnDefs = [];
  colData = [];

  rowDefs;
  rowData = [];
  fields = [];

  title = 'app';
  autoGroupColumnDef;
  editType;
  private editingRowIndex;
  updatedData;
  parentObject;
  subFormObjects;
  apiData;
  row_headers;
  col_headers;
  index_cols;
  colIds;
  empty_table;
  indexIds;
  pageTitle;
  buttonText = 'Save Data';
  btnClass;
  tableState;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router,
    private generalService: GeneralService,
    public toastr: ToastrService,
  ) {
    this.autoGroupColumnDef = { minWidth: 200 };
    this.defaultColDef = {
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      // valueFormatter: 'currencyDollarFormatter'
    };
    this.sideBar = {
      toolPanels: [
        'filters',
        {
          id: 'columns',
          labelDefault: 'Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel',
          toolPanelParams: { suppressSyncLayoutWithGrid: true },
        },
      ],
    };
    this.statusBar = {
      statusPanels: [
        {
          statusPanel: 'agTotalRowCountComponent',
          align: 'left',
          key: 'totalRowComponent',
        },
        {
          statusPanel: 'agFilteredRowCountComponent',
          align: 'left',
        },
        {
          statusPanel: 'agSelectedRowCountComponent',
          align: 'center',
        },
        {
          statusPanel: 'agAggregationComponent',
          align: 'right',
        },
      ],
    };

    this.ColumnAddForm = this.formBuilder.group({
      newcolumn: ''
    });
    this.editType = 'fullRow';
    this.colIds = [];
    this.indexIds = [];
    this.tableState = {};

    this.rowClassRules = {
      'sick-days-warning': function(params) {
        console.log(params);
        if (params.node.rowIndex % 2 === 0) {
          return true;
        }
        return false;
      },
      '.align-text-center' : function (params) {
        return true;
      }

    };

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
      this.gridId = '#agGridTable'+this.id;

      this.generalService.getTableDetails(this.id).subscribe((response: TableDetailsResponse) => {
        this.pageTitle = response.data.nepali_name;
      })
      this.renderTable(true);

      this.restoreState();
    });
  }

  renderTable(isOnInit) {
    this.formService.getDataHeaders(this.id).subscribe((response: DataHeaderResponse) => {
      this.row_headers = response.rows_headers;
      this.col_headers = response.col_headers;
      this.index_cols = response.index_cols;
      this.empty_table = response.empty_table;
      this.rowData = [];
      this.gridApi.setRowData([]);

      if (isOnInit == true) {
        this.colData = [];
        this.gridApi.setColumnDefs(this.colData);

        this.colData.push({
          headerName: '_id', value: '_id', hide: true, suppressToolPanel: true, 'field': '_id'
        });
        this.colIds.push('_id');

        this.colData.push(
          {headerName: '', field: 'group', pinned: 'left',  cellStyle: {color: 'white', 'background-color': '#1c77b9'}}
        )
        this.colIds.push('group');

        this.colData.push(
          {headerName: this.row_headers.title, field: 'row', pinned: 'left', cellStyle: {color: 'white', 'background-color': '#1c77b9'}}
        )
        this.colIds.push(this.row_headers.title);
        this.indexIds.push('row');

        this.index_cols.forEach(value => {

          if (value.options.length > 0) {
            const currentOptions = [];
            value.options.forEach(option => {
              currentOptions.push(option.nepali_name);
            })

            this.colData.push(
              {
                headerName: value.title,
                field: value.col_id,
                sortable: true,
                filter: true,
                cellEditor: 'agSelectCellEditor',
                cellEditorParams: {
                  values: currentOptions,
                },
                type: 'Select',
                options: value.options
              });
          } else {
            this.colData.push(
              {
                headerName: value.title,
                field: value.col_id,
                sortable: true,
                filter: true,
              });
          }
          this.colIds.push(value.col_id);
          this.indexIds.push(value.col_id);
        })

        this.col_headers.forEach(items => {
          this.modifyColumnHeaders(items);
          this.colData.push(items)
        })
        this.gridApi.setColumnDefs(this.colData);
        this.gridApi.setHeaderHeight(50);
      }

      /*this.empty_table.forEach(row => {
        console.log("Before column defs");
        console.log(row);
        this.gridColumnApi.getAllColumns().forEach(columnDefinitions => {
          let userDefinedColumnDefinitions = columnDefinitions.getUserProvidedColDef();
          if(!row[userDefinedColumnDefinitions.field]){
            row[userDefinedColumnDefinitions.field] = '';
          }
        })
        this.rowData.push(row);
      });

      this.formService.getData(this.id).subscribe((dataResponse: DataResponse) => {
        this.apiData = dataResponse.data;
        this.apiData.forEach(apiDatum => {
          this.rowData.forEach(row => {
            if(row.row == apiDatum.row){
              this.gridColumnApi.getAllColumns().forEach(columnDefinitions => {
                let userDefinedColumnDefinitions = columnDefinitions.getUserProvidedColDef();
                row[userDefinedColumnDefinitions.field] = apiDatum[userDefinedColumnDefinitions.field];
              })
            }
          })
        })
        console.log("After mapping with the api data");
        console.log(this.rowData);

      });*/



      this.empty_table.forEach(row => {
        const rowValue = {};
        let currentRowValue = '';
        let currentGroupValue = '';
        this.row_headers.indicators.forEach(indicator => {
          if (indicator.id == row.row) {
            currentRowValue = indicator.title;
            currentGroupValue = indicator.group[0];
          }
        });
        rowValue['group'] = currentGroupValue;
        rowValue['row'] = currentRowValue;

        const usedKeys = [];
        usedKeys.push('group');
        usedKeys.push('row');

        const keys = Object.keys(row);
        keys.forEach(key => {
          if (key == 'row') {
            return;
          }

          if(key == 'group'){
            return;
          }

          let indexValue = '';
          this.index_cols.forEach(index_col => {
            if (index_col.col_id == key) {
              index_col.options.forEach(option => {
                if (option.id == row[key]) {
                  indexValue = option.nepali_name;
                  usedKeys.push(key);
                }
              })
            }
          })

          rowValue[key] = indexValue;
        })

        keys.forEach(key => {
          let keyStatus = false;
          usedKeys.forEach(usedKey => {
            if (usedKey == key) {
              keyStatus = true;
              return;
            }
          })

          // tslint:disable-next-line:triple-equals
          // @ts-ignore
          if (keyStatus == true) {
            return;
          }

          rowValue[key] = row[key];
        })
        this.rowData.push(rowValue);
      })

      this.formService.getData(this.id).subscribe((dataResponse: DataResponse) => {
        this.apiData = dataResponse.data;
        this.rowData.forEach(row => {

          let currentRowValue = '';
          this.row_headers.indicators.forEach(indicator => {
            if (indicator.title == row.row) {
              currentRowValue = indicator.id;
            }
          });

          row['row'] = currentRowValue;

          let usedKeys = [];
          usedKeys.push('row');

          const keys = Object.keys(row);
          keys.forEach(key => {
            if (key == 'row') {
              return;
            }
            let indexValue = '';
            this.index_cols.forEach(index_col => {
              if (index_col.col_id == key) {
                index_col.options.forEach(option => {
                  if (option.nepali_name == row[key]) {
                    indexValue = option.id;
                    usedKeys.push(key);
                  }
                })
              }
            })

            row[key] = indexValue;
          })


          this.apiData.forEach(apiDatum => {

            let matchStatus = true;
            this.indexIds.forEach(indexId => {
              if (matchStatus ==  false) {
                return;
              }

              if (row[indexId] ==  apiDatum[indexId]) {
                matchStatus = true;
              } else {
                matchStatus = false;
              }
            })

            if (matchStatus == true) {
              const apiDataKeys = Object.keys(apiDatum);
              apiDataKeys.forEach(apiDataKey => {
                let isIndexKey = false;
                this.indexIds.forEach(indexId => {
                  if (indexId == apiDataKey) {
                    isIndexKey = true;
                    return;
                  }
                });

                // tslint:disable-next-line:triple-equals
                // @ts-ignore
                if (isIndexKey == true) {
                  return;
                }
                row[apiDataKey] = apiDatum[apiDataKey];
              })
            }
          })

          //  Modify data to get the headers

          const rowValue = {};
          currentRowValue = '';
          let currentGroupValue = '';
          this.row_headers.indicators.forEach(indicator => {
            if (indicator.id == row.row) {
              currentRowValue = indicator.title;
              currentGroupValue = indicator.group[0];
            }
          });

          row['group'] = currentGroupValue;
          row['row'] = currentRowValue;
          //
          usedKeys = [];
          usedKeys.push('_id');
          usedKeys.push('group')
          usedKeys.push('row');
          //
          this.indexIds.forEach(key => {
            if (key == 'row') {
              return;
            }

            if(key == 'group'){
              return;
            }

            let indexValue = '';
            this.index_cols.forEach(index_col => {
              if (index_col.col_id == key) {
                index_col.options.forEach(option => {
                  if (option.id == row[key]) {
                    indexValue = option.nepali_name;
                    usedKeys.push(key);
                  }
                })
              }
            })

            row[key] = indexValue;
          })

          this.gridColumnApi.getAllColumns().forEach(column => {
            let userColDef = column.getUserProvidedColDef();
            if(this.indexIds.indexOf(userColDef.field) !== -1){

            }
            else{
              if(userColDef.field == '_id' || userColDef.field == 'group'){
                return;
              }
              if(userColDef.type == 'Select'){
                userColDef.options.forEach(option => {
                  if(option.id == row[userColDef.field]){
                    row[userColDef.field] = option.nepali_name;
                  }
                })
              }
              else if(userColDef.type == 'Rupees'){
                row[userColDef.field] = this.curencyNepaliRupeesFormatter(row[userColDef.field]);
              }
            }
          })


        })
        this.gridApi.setRowData([]);
        this.gridApi.setRowData(this.rowData);

        var allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach(function(column) {
          allColumnIds.push(column.colId);
        });
        this.gridColumnApi.autoSizeColumns(allColumnIds, false);

      });

    })
  }

  addNewRow() {
    this.rowData.push({});
    this.gridApi.setRowData(this.rowData);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi  = params.columnApi;
    this.gridApi.setColumnDefs([]);
    this.renderTable(false);
  }

  onBtStopEditing() {
    this.gridApi.stopEditing();
  }

  navigateToDesignTables(){
    this.router.navigate(['admin/tables/design/'+this.id])
  }

  onCellClicked($event) {
    // check whether the current row is already opened in edit or not
    if (this.editingRowIndex != $event.rowIndex) {
      // console.log($event);
      $event.api.startEditingCell({
        rowIndex: $event.rowIndex,
        colKey: $event.column.colId
      });
      this.editingRowIndex = $event.rowIndex;
    }
    this.buttonText = 'Save Data';
    this.btnClass = '';
  }

  onCellEditingStopped($event) {
    const editedRowIndex = $event.rowIndex;
    this.updatedData = $event.data;
  }

  onRowEditingStopped($event) {
    const row = $event.data;
    $event.data._id = this.saveRowData(row);
  }

  onPasteEnd(params){
    var self = this;
    this.gridApi.forEachNode(function(node) {
      node.data._id = self.saveRowData(node.data);
    });
  }

  onColumnResized($event){
    let columnDetails = $event.columns[0];
  }

  modifyColumnHeaders(obj){
    if(obj.hasOwnProperty('children')){
      let columnChildrens = obj.children;

      columnChildrens.forEach(columnChildren => {
        if(columnChildren.type == 'Select'){
          const currentOptions = [];

          columnChildren.options.forEach(option => {
            currentOptions.push(option.nepali_name);
          })

          columnChildren.cellEditor =  'agSelectCellEditor';
          columnChildren.cellEditorParams = {
            values: currentOptions,
          };
        }
        else if(columnChildren.type == 'Number'){
          columnChildren.cellStyle = {'text-align': 'right', 'font-family': 'PCS Nepali'};
        }
        this.modifyColumnHeaders(columnChildren);
      })
    }
    return null;
  }


  curencyNepaliRupeesFormatter(params){
    return this.formatNumber(params);
  }

  currencyDollarFormatter(params) {
    console.log(params);
  }

  formatNumber(number) {
    const formatter = new Intl.NumberFormat('np-NP', {
      style: 'currency',
      currency: 'NPR',
      minimumFractionDigits: 2
    })
    return formatter.format(number);
  }

  saveRowData(row){
    let saveColData = {};
    this.gridColumnApi.getAllColumns().forEach(column => {
      let userColumnDef = column.getUserProvidedColDef();
      if(userColumnDef.type == 'Select'){
        // console.log(userColumnDef);
        userColumnDef.options.forEach(option => {
          if(option.nepali_name == row[userColumnDef.field]){
            saveColData[userColumnDef.field] = option.id;
          }
        })
      }
      else {
        if(row[userColumnDef.field]){
          saveColData[userColumnDef.field] = row[userColumnDef.field];
        } else{
          if(userColumnDef.field != '_id'){
            saveColData[userColumnDef.field] = "";
          }
        }
      }
    })


    let row_header_row = 'row';
    this.row_headers.indicators.forEach(indicator => {
      if (indicator.title == saveColData[row_header_row]) {
        saveColData[row_header_row] = indicator.id;
      }
    });

    const currentData = {
      'data': saveColData
    };
    let responseId = '';

    this.formService.saveData(this.id, currentData).subscribe((response: FormResponse) => {
      responseId = response.data[0]._id;
      this.buttonText = 'Saved';
      this.btnClass = 'btn-success';
      this.swalSuccess('Data saved successfully');
      return responseId;
    })
  }

  saveTableConfiguration(){
    this.tableState.tableID   = this.id;
    this.tableState.colState  = this.gridColumnApi.getColumnState();
    this.tableState.groupState  = this.gridColumnApi.getColumnGroupState();
    this.tableState.filterState = this.gridApi.getFilterModel();

    const currentData = {
      data: this.tableState
    };
    console.log(currentData);

    this.generalService.saveTableState(currentData).subscribe((response: TableStateResponse) => {
      this.tableState._id = response.data[0]._id;
      this.swalSuccess('Data configuration saved successfully');

    })
  }

  restoreState() {
    this.generalService.getTableState(this.id).subscribe((response: TableStateResponse) => {
      console.log(response);
      if(response.data[0]){
        this.tableState._id = response.data[0]._id;
        this.tableState.tableID = response.data[0].tableID;
        this.tableState.colState = response.data[0].colState;
        this.tableState.groupState = response.data[0].groupState;
        this.tableState.filterState = response.data[0].filterState;

        this.gridColumnApi.setColumnState(this.tableState.colState);
        this.gridColumnApi.setColumnGroupState(this.tableState.groupState);
        this.gridApi.setFilterModel(this.tableState.filterState);
      }
      else{
        this.tableState.tableID   = this.id;
        this.tableState.colState  = this.gridColumnApi.getColumnState();
        this.tableState.groupState  = this.gridColumnApi.getColumnGroupState();
        this.tableState.filterState = this.gridApi.getFilterModel();
      }

    })
  }

  swalSuccess(message) {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }



}
