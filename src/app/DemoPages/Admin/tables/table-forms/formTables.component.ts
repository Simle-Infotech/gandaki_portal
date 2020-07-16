import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../../../../services/general.service";
import {FormService} from "../../../../services/form.service";
import {SingleObjectResponse} from "../../../../models/user";

@Component({
  selector: 'app-admin-form-tables',
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

      this.formService.getFormDetails(this.id).subscribe((response: SingleObjectResponse) => {
        this.responseData = response.data;
        console.log(response.data);
      })
    });
  }

  navigateToTableList(tableId){
    this.router.navigate(['/admin/tables/'+tableId]);
  }

  navigateToTable(tableId){
    this.router.navigate(['/admin/tables/details/'+tableId]);
  }
}
