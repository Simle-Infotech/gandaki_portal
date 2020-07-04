import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {FormService} from "../../../services/form.service";
import {ListResponse} from "../../../models/user";

@Component({
  selector: 'app-admin-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnInit {

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

  rowDefs = [];
  rowData = [];
  fields = [];

  title = 'app';
  autoGroupColumnDef;
  editType;
  private editingRowIndex;
  updatedData;
  enableCharts;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private router: Router
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
    this.enableCharts = true;
  }

  ngOnInit(): void {

  }

  renderTable(isOnInit) {
    this.formService.getFormValues().subscribe((response: ListResponse) => {
      this.fields = response.fields;
      this.rowDefs = response.data;
      if (isOnInit == true) {
        this.columnDefs = response.columns;
        // this.colData = [];
        this.columnDefs.forEach(value => {
          console.log(value);
          if (value == 'sub_forms') {
            return;
          }

          this.colData.push(
            {headerName: value, field: value, sortable: true, filter: true, editable: true}
          )
        });

        this.colData.push({
          headerName: 'sub_forms',
          field: 'id',
          cellRenderer: (invNum) => {
            // console.log(params);
            return  `<a href="/#/admin/sub_forms/${invNum.value}" class="btn btn-sm"> view</a>`;
          }
        })

        this.colData.push({
          headerName: 'tables',
          field: 'id',
          cellRenderer: (invNum) => {
            return  `<a href="/#/admin/tables/${invNum.value}" class="btn btn-sm">view</a>`;
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

  addNewColumn(newColumnValue) {
    const columnName = newColumnValue.newcolumn;
    if (columnName == '') {
      return;
    }
    this.colData.push(
      {headerName: columnName, field: columnName, sortable: true, filter: true, editable: true, rowGroup: true}
    )
    this.gridApi.setColumnDefs(this.colData);
  }

  addNewRow() {
    this.rowData.push({});
    this.gridApi.setRowData(this.rowData);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.renderTable(true);
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


    console.log(currentData);
    this.formService.saveFormValues(currentData).subscribe((response) => {
      // console.log(response);
      this.renderTable(false);
    })
  }

  viewSubForms() {
    console.log('Viewing forms');
  }

}
