import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {FormService} from "../../../services/form.service";
import {GeneralService} from "../../../services/general.service";
import {
  CollectionResponse,
  DataHeaderResponse,
  DataResponse,
  FormResponse, ListResponse, SingleObjectResponse,
  singleTableStateResponse,
  TableDetailsResponse
} from "../../../models/user";
import Tabulator from 'tabulator-tables';

@Component({
  selector: 'app-form-tables',
  templateUrl: './formTables.component.html',
  styles: []
})
export class FormTablesComponent implements OnInit {

  images = [];
  menuItems = [];
  responseData;
  forms_count = [];
  tables_count = [];
  public forms_length = 0;
  public tables_length = 0;
  id;

  constructor( private generalService: GeneralService, private router: Router, private activatedRoute: ActivatedRoute, private formService: FormService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });

    this.formService.getFormDetails(this.id).subscribe((response: SingleObjectResponse) => {
      this.responseData = response.data;
    })
  }

  navigateToTable(tableId){
    this.router.navigate(['/guest/tables/details/'+tableId]);
  }
}
