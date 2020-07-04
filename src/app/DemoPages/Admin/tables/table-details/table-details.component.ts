import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {FormService} from "../../../../services/form.service";
import {
  DataHeaderResponse,
  DataResponse,
  FormResponse,
  SingleObjectResponse,
  TableDetailsResponse
} from "../../../../models/user";
import {GeneralService} from "../../../../services/general.service";
import {main} from "@angular/compiler-cli/src/main";
import {forEach} from "ag-grid-community/dist/lib/utils/array";
import {save} from "ionicons/icons";

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router,
    private generalService: GeneralService
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

    this.rowClassRules = {
      'sick-days-warning': function(params) {
        if (params.node.rowIndex % 2 === 0) {
          return true;
        }
        return false;
      },
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
    let saveColData = {};
    console.log(row);

    this.gridColumnApi.getAllColumns().forEach(column => {
      let userColumnDef = column.getUserProvidedColDef();
      // console.log(userColumnDef);
      if(userColumnDef.type == 'Select'){
        // userColumnDef.options.forEach(option => {
        //
        // })
      }
      else {
        if(row[userColumnDef.field]){
          saveColData[userColumnDef.field] = row[userColumnDef.field];
        } else{
          saveColData[userColumnDef.field] = "";
        }
      }
    })

    let row_header_row = 'row';
    let row_header_group = 'group';
    this.row_headers.indicators.forEach(indicator => {
      if (indicator.title == saveColData[row_header_row]) {
        saveColData[row_header_row] = indicator.id;
      }
    });
    // console.log(saveColData);

    const currentData = {
      'data': saveColData
    };
    console.log(currentData);
    this.formService.saveData(this.id, currentData).subscribe((response: FormResponse) => {
      $event.data._id = response.data[0]._id;
      // this.renderTable(false);
      this.buttonText = 'Saved';
      this.btnClass = 'btn-success';
    })

    // console.log(this.gridColumnApi.getAllColumns());

    /*const rowValue = {};
    let currentRowValue = '';
    this.row_headers.indicators.forEach(indicator => {
      if (indicator.title == row.row) {
        currentRowValue = indicator.id;
      }
    });
    rowValue['row'] = currentRowValue;

    const usedKeys = [];
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
    });

    const currentData = {
      'data': rowValue
    };
    console.log(currentData);
    this.formService.saveData(this.id, currentData).subscribe((response: FormResponse) => {
      $event.data._id = response.data[0]._id;
      // this.renderTable(false);
      this.buttonText = 'Saved';
      this.btnClass = 'btn-success';
    })*/
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


  curencyNepaliRupeesFormtter(params){
    return 'रू' + this.formatNumber(params.value);
  }

  currencyDollarFormatter(params) {
    console.log(params);
  }

  formatNumber(number) {
    return Math.floor(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  saveTableConfiguration(){
    let tableState = {};
    tableState['tableId']   = this.id;
    tableState['colState']  = this.gridColumnApi.getColumnState();
    tableState['groupState'] = this.gridColumnApi.getColumnGroupState();
    tableState['sortState']   = this.gridColumnApi.getSortModel;
    tableState['filterState'] = this.gridColumnApi.getFilterModel;

    console.log(tableState);
  }
  restoreState(tableState) {
    this.gridColumnApi.setColumnState(tableState.colState);
    this.gridColumnApi.setColumnGroupState(tableState.groupState);
    this.gridColumnApi.setSortModel(tableState.sortState);
    this.gridColumnApi.setFilterModel(tableState.filterState);
    console.log('column state restored');
  }



}
