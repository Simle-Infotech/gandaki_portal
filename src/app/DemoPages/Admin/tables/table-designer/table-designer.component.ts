import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from "../../../../services/form.service";
import {FormResponse, ListResponse} from "../../../../models/user";

@Component({
  selector: 'app-table-designer',
  templateUrl: './table-designer.component.html',
  styleUrls: ['./table-designer.component.css']
})
export class TableDesignerComponent implements OnInit {
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

  constructor(
      private activatedRoute: ActivatedRoute,
      private formBuilder: FormBuilder,
      private formService: FormService,
      private router: Router
  ) {
    this.autoGroupColumnDef = { minWidth: 200 };
    this.defaultColDef = {
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      width: 140,
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
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });

    this.renderTable(true);
  }

  renderTable(isOnInit) {
    this.formService.getQuestionColumns(this.id).subscribe((response: ListResponse) => {
      console.log(response);
      this.fields = response.fields;
      this.rowDefs = response.data;
      console.log(response);
      if (isOnInit == true) {
        this.columnDefs = response.columns;

        this.columnDefs.forEach(value => {
          if (value != 'table') {
            this.colData.push(
                {headerName: value, field: value, sortable: true, filter: true, editable: true}
            )
          }
        });
      }
      this.rowData = [];
      this.gridApi.setRowData(this.rowData);

      this.rowDefs.forEach(value => {
        this.rowData.push(
            value
        )
      });
      this.gridApi.setColumnDefs(this.colData);
      this.gridApi.setRowData(this.rowData);
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

    currentData.data.table = this.id;

    this.formService.saveQuestionColumns(currentData).subscribe((response: FormResponse) => {
      this.renderTable(false);
    })
  }

}
