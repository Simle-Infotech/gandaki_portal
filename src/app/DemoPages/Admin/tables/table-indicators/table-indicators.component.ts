import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from "../../../../services/form.service";
import {DataResponse, FormResponse, ListResponse, TableDetailsResponse} from "../../../../models/user";
import {GeneralService} from "../../../../services/general.service";
import {CheckboxRenderer} from "../../checkBox-renderer.component";

@Component({
  selector: 'app-table-indicators',
  templateUrl: './table-indicators.component.html',
  styleUrls: ['./table-indicators.component.css']
})
export class TableIndicatorsComponent implements OnInit {
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
  pageTitle;
  frameworkComponents;
  groups = [];

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
      rowDrag: true,
      minWidth: 100,
    };
    this.ColumnAddForm = this.formBuilder.group({
      newcolumn: ''
    });
    this.editType = 'fullRow';

    this.frameworkComponents = {
      checkboxRenderer: CheckboxRenderer,
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;

      this.generalService.getTableDetails(this.id).subscribe((response: TableDetailsResponse) => {
        this.pageTitle = response.data.nepali_name;
      })

      this.renderTable(true);
    });
  }

  renderTable(isOnInit) {
    this.formService.getIndicators(this.id).subscribe((response: ListResponse) => {
      console.log(response);
      this.fields = response.fields;
      this.rowDefs = response.data;
      if (isOnInit == true) {
        this.columnDefs = response.columns;

        this.columnDefs.forEach(value => {
          if (value == 'id') {
            this.colData.push(
              {headerName: value, field: value, sortable: true, filter: true, editable: true, hide: true}
            )
            return;
          }

          if(value == 'column'){
            this.colData.push(
              {headerName: value, field: value, sortable: true, filter: true, editable: true, hide: true}
            )
            return;
          }

          if(value == 'restricted_to_question'){
            return;
          }

          if(value !== 'nepali_name'){
            this.colData.push(
              {headerName: value, field: value, sortable: true, filter: true, editable: true, hide: true}
            )
          }
          else{
            this.colData.push(
              {headerName: value, field: value, sortable: true, filter: true, editable: true}
            )
          }

        });
      }
      this.rowData = [];
      this.gridApi.setRowData(this.rowData);

      this.generalService.getOptionGroups().subscribe((response: DataResponse) => {
        this.groups = response.data;

        this.rowDefs.forEach(value => {
          this.rowData.push(
            value
          )
        });


        this.groups.forEach(group => {
          group.rowData = [];
          group.options.forEach(option => {
            this.rowData.forEach(value => {
              if(value.id == option){
                group.rowData.push(value);
                this.rowData.splice(this.rowData.indexOf(value),1);
              }
            })
          })
        })
        console.log("Row definitions");
        console.log(this.rowDefs);

        // console.log(this.groups);

        this.gridApi.setColumnDefs(this.colData);
        this.gridApi.setRowData(this.rowData);

        var allColumnIds = [];
        this.gridColumnApi.getAllColumns().forEach(function(column) {
          allColumnIds.push(column.colId);
        });
      })
    })
  }

  addNewRow() {
    this.rowData.push({});
    this.gridApi.setRowData(this.rowData);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.setColumnDefs(this.colData);
  }

  onBtStopEditing() {
    this.gridApi.stopEditing();
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
  }

  onCellEditingStopped($event) {
    const editedRowIndex = $event.rowIndex;
    this.updatedData = $event.data;
  }

  onRowEditingStopped($event) {
    const currentData = {
      'data': $event.data
    };
    currentData.data.column = this.id;
    currentData.data.restricted_to_question = [];

    console.log("Saved data");
    console.log(currentData);

    /*this.formService.saveIndicators(currentData).subscribe((response: FormResponse) => {
      this.renderTable(false);
    })*/
  }

  gridDragOver(event) {
    var dragSupported = event.dataTransfer.types.length;

    if (dragSupported) {
      event.dataTransfer.dropEffect = "copy";
      event.preventDefault();
    }
  }

  gridDrop(event, grid) {
    event.preventDefault();

    var userAgent = window.navigator.userAgent;
    var isIE = userAgent.indexOf('Trident/') >= 0;
    var jsonData = event.dataTransfer.getData(isIE ? 'text' : 'application/json');
    var data = JSON.parse(jsonData);

    // if data missing or data has no it, do nothing
    if (!data || data.id == null) {
      return;
    }
    console.log(data);
    /*var gridApi = grid == 'left' ? this.leftGridOptions.api : this.rightGridOptions.api;

    // do nothing if row is already in the grid, otherwise we would have duplicates
    var rowAlreadyInGrid = !!gridApi.getRowNode(data.id);
    if (rowAlreadyInGrid) {
      console.log('not adding row to avoid duplicates in the grid');
      return;
    }

    var transaction = {
      add: [data]
    };
    gridApi.applyTransaction(transaction);*/
  }

}
