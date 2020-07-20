import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from "../../../../services/form.service";
import {DataResponse, FormResponse, ListResponse, TableDetailsResponse} from "../../../../models/user";
import {GeneralService} from "../../../../services/general.service";
import {CheckboxRenderer} from "../../checkBox-renderer.component";
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model/dist/es6/clientSideRowModelModule";

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
  displayed_groups = [];
  displayed_group_grid_options = [];
  uncategorized_grid_options;
  modules = [ClientSideRowModelModule];

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

          if((value !== 'nepali_name') && (value !== 'value')){
            this.colData.push(
              {headerName: value, field: value, sortable: true, filter: true, editable: true, hide: true}
            )
          }
          else{
            let rowDragStatus = (value === 'nepali_name');
            this.colData.push(
              {headerName: value, field: value, sortable: true, filter: true, editable: true, rowDrag: rowDragStatus}
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
        this.displayed_groups = [];
        this.groups.forEach(group => {
          group.rowData = [];
          group.options.forEach(option => {
            this.rowData.forEach(value => {
              if(value.id == option){
                group.rowData.push(value);
                // this.rowData.splice(this.rowData.indexOf(value),1);
              }
            })
          })
          if(group.rowData.length > 0){
            this.displayed_groups.push(group);
          }
        })

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
    this.uncategorized_grid_options = params.gridOptions;
    console.log(this.uncategorized_grid_options);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.setColumnDefs(this.colData);
  }

  onCategorizedGroupGridReady(params, group, is_last){
    group.gridOptions = params.gridOptions;
    group.gridApi = params.api;
    group.gridColumnApi = params.columnApi;
    this.displayed_group_grid_options.push(group);
    this.addGridDropZone(params, group);
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

    this.formService.saveIndicators(currentData).subscribe((response: FormResponse) => {
      this.renderTable(false);
    })
  }

  onRowDragEnd($event, group){
    console.log("Group");
    if(group.options.indexOf($event.node.data.id) == -1){
      group.options.push($event.node.data.id);
    }

    let updatedGroup = group;
    updatedGroup.gridApi = '';
    updatedGroup.gridColumnApi = '';
    updatedGroup.gridOptions = '';
    updatedGroup.params = '';
    this.updateOptionGroup(updatedGroup);
    console.log("Grpup");
    console.log(group);
    console.log("Updated group");
    console.log(updatedGroup);
  }

  getRowNodeId(data) {
    return data.id;
  }

  addGridDropZone(params, side) {
    var is_completed = true;

    if(side == 'uncategorized') {
      this.gridApi.params = params;
      return;
    }

    this.displayed_groups.forEach(group => {
      if(group.id == side.id){
        group.params = params;
      }
      if(!group.gridApi){
        is_completed = false;
      }
    })

    // @ts-ignore
    if(is_completed == false){
      return;
    }

    this.displayed_groups.forEach(group => {
      this.displayed_groups.forEach(initialGroup => {
        if(group.id == initialGroup.id){
          return;
        }

        var initialGridApi = initialGroup.gridApi;
        var dropZone = initialGridApi.getRowDropZoneParams();
        group.params.api.addRowDropZone(dropZone);

      })

      var initialGridApi = group.gridApi;
      var dropZone = initialGridApi.getRowDropZoneParams();
      this.gridApi.addRowDropZone(dropZone);

    })
  }

  updateOptionGroup(data){
    const currentData = {
      'data': data
    };
    console.log(currentData);

    this.generalService.saveOptionGroup(currentData).subscribe((response: DataResponse) => {
      console.log(response);
    })
  }

}
