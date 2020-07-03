import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {FormService} from "../../../services/form.service";
import {GeneralService} from "../../../services/general.service";
import {DataHeaderResponse, DataResponse, FormResponse, TableDetailsResponse} from "../../../models/user";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: []
})
export class TablesComponent implements OnInit {
  toggleMobileSidebar: any;

  id;
  private gridApi;
  private gridColumnApi;
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
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });

    this.generalService.getTableDetails(this.id).subscribe((response: TableDetailsResponse) => {
      this.pageTitle = response.data.nepali_name;
      console.log(this.pageTitle);
    })
  }

  renderTable(isOnInit) {
    this.formService.getDataHeaders(this.id).subscribe((response: DataHeaderResponse) => {
      console.log(response);
      this.row_headers = response.rows_headers;
      this.col_headers = response.col_headers;
      this.index_cols = response.index_cols;
      this.empty_table = response.empty_table;
      this.rowData = [];
      this.gridApi.setRowData([]);

      if (isOnInit == true) {
        this.colData.push({
          headerName: '_id', value: '_id', hide: true, suppressToolPanel: true
        });
        this.colIds.push('_id');

        this.colData.push(
          {headerName: 'group', field: 'group', pinned: 'left'}
        )
        this.colIds.push('group');


        this.colData.push(
          {headerName: this.row_headers.title, field: 'row', pinned: 'left'}
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
          const colHeaderData = {
            headerName: '',
            children: [

            ]
          };
          const childrenColHeaderData = {
            headerName: '',
            children: [

            ]
          };

          const mainHeaderData = {
            headerName: items.title,
            field: items.id,
            sortable: true,
            filter: true,
          }

          // for(let itemIndex = 0; itemIndex < items.group.length;itemIndex++){
          //   console.log("Item index");
          //   console.log(itemIndex);
          //   if(itemIndex+1 == items.group.length){
          //     colHeaderData.headerName = items.group[itemIndex];
          //   }
          //   else {
          //     if (items.group[itemIndex] == " "){
          //       childrenColHeaderData.children.push(mainHeaderData);
          //     }
          //     else{
          //       let subChildren = childrenColHeaderData;
          //       childrenColHeaderData.headerName = items.group[itemIndex];
          //       childrenColHeaderData.children.push(subChildren);
          //     }
          //   }
          // }
          //
          // colHeaderData.children.push(childrenColHeaderData);


          items.group.reverse().forEach(value => {
            if (colHeaderData.headerName == '') {
              colHeaderData.headerName = value;
            } else {
              if (childrenColHeaderData.headerName == '') {
                childrenColHeaderData.headerName = value;
              }
            }
          })

          childrenColHeaderData.children.push(mainHeaderData);
          colHeaderData.children.push(childrenColHeaderData);
          console.log("Column header data");
          console.log(colHeaderData);
          this.colData.push(colHeaderData)
          this.colIds.push(items.id);
        })
      }
      this.gridApi.setColumnDefs(this.colData);

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

      console.log("Row data");
      console.log(this.rowData);


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
              console.log(row);
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


  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.renderTable(true);
  }

}
