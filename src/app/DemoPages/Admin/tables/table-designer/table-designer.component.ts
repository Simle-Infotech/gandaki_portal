import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from "../../../../services/form.service";
import {FormResponse, ListResponse, TableDetailsResponse} from "../../../../models/user";
import {GeneralService} from "../../../../services/general.service";
import {CheckboxRenderer} from "../../checkBox-renderer.component";

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
  pageTitle;
  frameworkComponents;

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

    this.frameworkComponents = {
      checkboxRenderer: CheckboxRenderer,
    };
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;

      this.generalService.getTableDetails(this.id).subscribe((response: TableDetailsResponse) => {
        this.pageTitle = response.data.nepali_name;
        console.log(this.pageTitle);
      })

      this.renderTable(true);
    });
  }

  renderTable(isOnInit) {
    this.formService.getQuestionColumns(this.id).subscribe((response: ListResponse) => {
      console.log(response);
      this.fields = response.fields;
      this.rowDefs = response.data;
      console.log(response);
      if (isOnInit == true) {
        //Hardcode the fields to be shown in the designer page

        this.colData.push(
          {headerName: 'id', field: 'id', sortable: false, hide: true},
          {headerName: 'name', field: 'name', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'nepali_name', field: 'nepali_name', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'ordering', field: 'ordering', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'unit_description', field: 'unit_description', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'question_required', field: 'question_required', sortable: true, hide: false, filter: true, editable: true,  cellRenderer: 'checkboxRenderer'},
          {headerName: 'uri', field: 'uri', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'is_row_index', field: 'is_row_index', sortable: true, hide: false, filter: true, editable: true, cellRenderer: 'checkboxRenderer'},
          {headerName: 'js_code', field: 'js_code', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'is_indexed', field: 'is_indexed', sortable: true, hide: false, filter: true, editable: true, cellRenderer: 'checkboxRenderer'},
          {headerName: 'index_method', field: 'index_method', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'is_extra', field: 'is_extra', sortable: true, hide: false, filter: true, editable: true, cellRenderer: 'checkboxRenderer'},
          {headerName: 'question_type', field: 'question_type', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'table', field: 'table', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'unit', field: 'unit', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'same_options_questions', field: 'same_options_questions', sortable: true, hide: false, filter: true, editable: true},
          {headerName: 'validation_rule', field: 'validation_rule', sortable: true, hide: true, filter: true, editable: true},
        )

        this.colData.push({
          headerName: 'Indicators',
          field: 'id',
          cellRenderer: (invNum) => {
            return  `<a href="/#/admin/tables/indicators/${invNum.value}" class="btn btn-sm">view</a>`;
          }
        });

        /*this.columnDefs = response.columns;

        this.columnDefs.forEach(value => {
          if (value != 'table' || value != id) {
            this.colData.push(
                {headerName: value, field: value, sortable: true, filter: true, editable: true}
            )
          }
        });*/
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

      var allColumnIds = [];
      this.gridColumnApi.getAllColumns().forEach(function(column) {
        allColumnIds.push(column.colId);
      });
      this.gridColumnApi.autoSizeColumns(allColumnIds, false);
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

  navigateToDetailsTables(){
    this.router.navigate(['admin/tables/details/'+this.id])
  }

  navigateToPreview(){
    this.router.navigate(['guest/tables/details/'+this.id])
  }

}
