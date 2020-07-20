import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {FormService} from "../../../services/form.service";
import {GeneralService} from "../../../services/general.service";
import {
  CollectionResponse,
  DataHeaderResponse,
  DataResponse,
  FormResponse,
  singleTableStateResponse,
  TableDetailsResponse
} from "../../../models/user";
import Tabulator from 'tabulator-tables';
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [`
    .tabulator-group-level-0{
      background: red !important;
      color: white;
    }
    .tabulator-group-level-1{
    background: #2873b9 !important;
    color: white;
    }

    `]
})
export class TablesComponent implements OnInit {
  gridId;
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
  colState;
  groupState;
  sortState;
  filterState;
  groups = [];
  tabulatorTable : any;
  collections;
  is_logged = false;

  icon; tableID; activeFilter=false; collect_title; collect_icon_path; collect_sub_title;

  @Input() tableData: any[] = [
  ];
  @Input() columnNames: any[] = [ //Define Table Columns
  ];

  @Input() height: string = '311px';

  tab = document.createElement('div');

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router,
    private generalService: GeneralService,
    private authenticationService: AuthenticationService
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
    this.collections = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
      this.gridId = '#agGridTable'+this.id;

      this.generalService.getTableDetails(this.id).subscribe((response: TableDetailsResponse) => {
        this.pageTitle = response.data.nepali_name;
        this.icon = response.data.icon_path;
        this.tableID = response.data.id;
        this.generalService.getSingleTableState(this.id).subscribe((response: singleTableStateResponse) => {
          this.colState = response.data.colState;
          this.groupState = response.data.groupState;
          this.sortState = response.data.sortState;
          this.filterState = response.data.filterState;
        })
      })

      if (this.authenticationService.CurrentUserValue) {
        this.is_logged = true;
      }

      this.renderTable(true);
    });
  }

  private drawTable(): void {
    this.columnNames.forEach(columnName => {
      this.handleVisibility(columnName);
    })

    if(this.groups.length > 1){
      this.formService.getCollectionList(this.tableID).subscribe((response: CollectionResponse) => {
        this.collections = response.data;
        this.tabulatorTable.options.groupBy=this.groups;
        // console.log(this.tabulatorTable.options.groupBy);
        // console.log(this.collections, this.id);
      })
    }

    this.tabulatorTable = new Tabulator("#my-tabular-table", {
      data:this.apiData,           //load row data from array
      layout:"fitColumns",      //fit columns to width of table
      responsiveLayout:"hide",  //hide columns that dont fit on the table
      tooltips:true,            //show tool tips on cells
      addRowPos:"top",          //when adding a new row, add it to the top of the table
      history:true,             //allow undo and redo actions on the table
      movableColumns:true,      //allow column order to be changed
      resizableRows:true,
      groupBy:this.groups,
      columnVertAlign: "bottom", //allow row order to be changed
      initialSort:[             //set the initial sort order of the data
        {column:"name", dir:"asc"},
      ],
      columns:this.columnNames,
    });
    this.tabulatorTable.redraw();
  }


  renderTable(isOnInit) {
    this.formService.getDataHeaders(this.id).subscribe((response: DataHeaderResponse) => {
      this.row_headers = response.rows_headers;
      this.col_headers = response.col_headers;
      this.index_cols = response.index_cols;
      this.empty_table = response.empty_table;
      this.rowData = [];
      // this.gridApi.setRowData([]);

      if (isOnInit == true) {
        this.colData = [];
        this.groups = [];
        // this.gridApi.setColumnDefs(this.colData);

        this.colData.push({
          headerName: '_id', value: '_id',title: '_id', field: '_id', hide: true, suppressToolPanel: true
        });
        this.colIds.push('_id');


        for(let i = 0; i< this.row_headers.indicators[0].group.length; i++){
          this.colData.push(
            {headerName: 'group'+i, field: 'group'+i, title: 'group'+i, pinned: 'left', visible: false}
          )
          this.groups.push('group'+i);
          this.colIds.push('group'+i);
        }

        // console.log(this.groups);

/*        this.colData.push(
          {headerName: 'group', field: 'group', title: 'group', pinned: 'left', visible: false}
        )
        this.colIds.push('group');*/

        this.colData.push(
          {headerName: this.row_headers.title, field: 'row', title: this.row_headers.title, pinned: 'left'}
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
                title: value.title,
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
                title: value.title
              });
          }
          this.colIds.push(value.col_id);
          this.indexIds.push(value.col_id);
        })

        this.col_headers.forEach(items => {
          this.modifyColumnHeaders(items);
          this.modifyColumnHeadersForTabulator(items);
          this.colData.push(items)
        })
        this.columnNames = this.colData;
        // this.gridApi.setColumnDefs(this.colData);
        console.log(this.columnNames);
      }


      /*this.empty_table.forEach(row => {
        const rowValue = {};
        let currentRowValue = '';
        let currentGroupValue = '';
        let usedKeys = [];
        this.row_headers.indicators.forEach(indicator => {
          if (indicator.id == row.row) {
            currentRowValue = indicator.title;
            for (let i =0; i<indicator.group.length;i++){
              rowValue['group'+i] = indicator.group[i];
              usedKeys.push('group'+i);
            }
            indicator.group.forEach(singleGroup => {
              rowValue[singleGroup] = singleGroup;
            })
            // currentGroupValue = indicator.group[0];
          }
        });
        // rowValue['group'] = currentGroupValue;
        rowValue['row'] = currentRowValue;

        let lookup = {};
        let uniqueArr = [];
        for(let i=0; i<usedKeys.length; i++) {
          if(!lookup[usedKeys[i]]) {
            lookup[usedKeys[i]] = true;
            uniqueArr.push(usedKeys[i]);
          }
        }

        usedKeys = uniqueArr;

        // usedKeys.push('group');
        usedKeys.push('row');

        const keys = Object.keys(row);
        keys.forEach(key => {
          if (key == 'row') {
            return;
          }

          /!*if(key == 'group'){
            return;
          }*!/

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
      })*/

      this.formService.getData(this.id).subscribe((dataResponse: DataResponse) => {
        this.apiData = dataResponse.data;
        this.apiData.forEach(apiDatum => {
          this.row_headers.indicators.forEach(indicator => {
            if(indicator.id == apiDatum.row){
              apiDatum.row = indicator.title;
            }
          })
          console.log(this.row_headers);
          console.log(apiDatum);
        })

//         this.rowData.forEach(row => {
//
//           let currentRowValue = '';
//           this.row_headers.indicators.forEach(indicator => {
//             if (indicator.title == row.row) {
//               currentRowValue = indicator.id;
//             }
//           });
//
//           row['row'] = currentRowValue;
//
//           let usedKeys = [];
//           usedKeys.push('row');
//
//           const keys = Object.keys(row);
//           keys.forEach(key => {
//             if (key == 'row') {
//               return;
//             }
//             let indexValue = '';
//             this.index_cols.forEach(index_col => {
//               if (index_col.col_id == key) {
//                 index_col.options.forEach(option => {
//                   if (option.nepali_name == row[key]) {
//                     indexValue = option.id;
//                     usedKeys.push(key);
//                   }
//                 })
//               }
//             })
//
//             row[key] = indexValue;
//           })
//
//
//           this.apiData.forEach(apiDatum => {
//             let matchStatus = true;
//             this.indexIds.forEach(indexId => {
//               if (matchStatus ==  false) {
//                 return;
//               }
//
//               if (row[indexId] ==  apiDatum[indexId]) {
//                 matchStatus = true;
//               } else {
//                 matchStatus = false;
//               }
//             })
//
//             if (matchStatus == true) {
//               const apiDataKeys = Object.keys(apiDatum);
//               apiDataKeys.forEach(apiDataKey => {
//                 let isIndexKey = false;
//                 this.indexIds.forEach(indexId => {
//                   if (indexId == apiDataKey) {
//                     isIndexKey = true;
//                     return;
//                   }
//                 });
//
//                 // tslint:disable-next-line:triple-equals
//                 // @ts-ignore
//                 if (isIndexKey == true) {
//                   return;
//                 }
//
//                 row[apiDataKey] = apiDatum[apiDataKey];
//               })
//               // console.log(row);
//             }
//           })
//
//           //  Modify data to get the headers
//
//           const rowValue = {};
//           currentRowValue = '';
//           let currentGroupValue = '';
//           usedKeys = [];
//           this.row_headers.indicators.forEach(indicator => {
//             if (indicator.id == row.row) {
//               currentRowValue = indicator.title;
//               for(let i = 0;i<indicator.group.length; i++){
//                 row['group'+i] = indicator.group[i];
//                 usedKeys.push('group'+i);
//               }
// /*              indicator.group.forEach(singleGroup => {
//                 row[singleGroup] = singleGroup;
//                 usedKeys.push(singleGroup);
//               })*/
//               // currentGroupValue = indicator.group[0];
//             }
//           });
//
//           // row['group'] = currentGroupValue;
//           row['row'] = currentRowValue;
//           let lookup = {};
//           let uniqueArr = [];
//           for(let i=0; i<usedKeys.length; i++) {
//             if(!lookup[usedKeys[i]]) {
//               lookup[usedKeys[i]] = true;
//               uniqueArr.push(usedKeys[i]);
//             }
//           }
//
//           usedKeys = uniqueArr;
//
//           //
//
//           // usedKeys.push('group')
//           usedKeys.push('row');
//           //
//           this.indexIds.forEach(key => {
//             if (key == 'row') {
//               return;
//             }
//
//             if(key == 'group'){
//               return;
//             }
//
//             let indexValue = '';
//             this.index_cols.forEach(index_col => {
//               if (index_col.col_id == key) {
//                 index_col.options.forEach(option => {
//                   if (option.id == row[key]) {
//                     indexValue = option.nepali_name;
//                     usedKeys.push(key);
//                   }
//                 })
//               }
//             })
//
//             row[key] = indexValue;
//           })
//         })
        /*this.gridApi.setRowData([]);
        this.gridApi.setRowData(this.rowData);

        var allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach(function(column) {
          allColumnIds.push(column.colId);
        });
        this.gridColumnApi.autoSizeColumns(allColumnIds, false);*/
        this.drawTable();
      });
    })
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.setColumnDefs([]);
    this.renderTable(false);
  }


  modifyColumnHeaders(obj){
    obj.editable = false;
    obj.title = obj.headerName;
    if(obj.hasOwnProperty('children')){
      let columnChildrens = obj.children;

      columnChildrens.forEach(columnChildren => {
        if(columnChildren.type == 'Select'){
          const currentOptions = [];

          columnChildren.options.forEach(option => {
            currentOptions.push(option.nepali_name);
          })

          columnChildren.editable = false;
          columnChildren.cellEditor =  'agSelectCellEditor';
          columnChildren.cellEditorParams = {
            values: currentOptions,
          };
        }
        this.modifyColumnHeaders(columnChildren);
      })
    }
    return null;
  }

  modifyColumnHeadersForTabulator(obj){
    if(obj.hasOwnProperty('children')){
      obj.columns = obj.children;
      obj.children.forEach(child => {
        this.modifyColumnHeadersForTabulator(child);
      })
    }
    return null;
  }

  handleVisibility(obj){
    if(obj.field == '_id'){
      obj.visible = false;
    }

    obj.formatter = function (cell, formatterParams, onRendered) {
      if(obj.type == 'Rupees'){
        obj.align = "right";
        if(cell.getValue() == ""){
          return cell.getValue();
        }
        return "<span style='font-family: Fontasy Himali;float:right'>"+ 'रू '+ parseFloat(cell.getValue()).toFixed(2) +"</span>";
      }
      else if(obj.type == 'Number'){
        if(cell.getValue() == ""){
          return cell.getValue();
        }
        return "<span style='font-family: Fontasy Himali;float:right'>"+ cell.getValue() +"</span>";
      }
      else if(obj.type == 'Float'){
        if(cell.getValue() == ""){
          return cell.getValue();
        }
        return "<span style='font-family: Fontasy Himali;float:right'>"+ parseFloat(cell.getValue()).toFixed(2) +"</span>";
      }
      else if(obj.type == 'Dollars'){
        obj.align = "right";
        if(cell.getValue() == ""){
          return cell.getValue();
        }
        return "<span style='float:right'>"+ '$ '+ cell.getValue() +"</span>";
      }
      else if(obj.type == 'Percentage'){
        let percentageValue =  cell.getValue();
        if(cell.getValue() == ""){
          return cell.getValue();
        }
        return "<span style='font-family: Fontasy Himali;float:right'>"+ parseFloat(percentageValue).toFixed(2) + '% ' +"</span>";
      }
      else if(obj.type == 'Select'){
        let value = cell.getValue();
        obj.options.forEach(option => {
          if(option.id == value){
            value = option.nepali_name;
          }
        });
        return value;
      }
      else{
        return cell.getValue();
      }
    }

    if(this.colState){
      this.colState.forEach(col => {
        if(col.colId == obj.field){
          if(col.hide == true){
            obj.visible = false;
          }
        }
      });
    }

    if(obj.hasOwnProperty('columns')){
      obj.columns.forEach(column =>{
        this.handleVisibility(column);
      })
    }

    return null;
  }

  exportTabulatorTable(){
    this.tabulatorTable.download("xlsx", this.pageTitle+".xlsx", {sheetName:this.pageTitle});
  }

  addFilterToTabulator(text){
    this.tabulatorTable.clearFilter();
    this.tabulatorTable.addFilter('group0', '=', text);
  }

  resetFilter(){
    this.tabulatorTable.clearFilter();
  }

  goToDataEntry(){
    this.router.navigate(['/admin/tables/details/'+this.id])
  }

}
