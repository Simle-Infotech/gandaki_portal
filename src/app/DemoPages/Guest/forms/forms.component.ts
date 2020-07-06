import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {GeneralService} from "../../../services/general.service";
import {ListResponse} from "../../../models/user";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  subForms: [];
  tables: [];
  id: string;
}

export const ROUTES: RouteInfo[] = [
];

@Component({
  selector: 'app-admin-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnInit {

  images = [];
  menuItems = [];
  responseData;
  forms_count = [];
  tables_count = [];
  public forms_length = 0;
  public tables_length = 0;

  constructor( private generalService: GeneralService, private router: Router) {}

  ngOnInit(): void {
    this.generalService.getSidebar().subscribe((response: ListResponse) => {
      this.responseData = response.data;
      this.forms_length += 1;
      this.responseData.forEach(value => {

        value.tables.forEach(table => {
          table.url = '/guest/tables/'+table.id;
          this.tables_length += 1;
        })
        this.menuItems.push({
          path: '/admin/',
          title: value.nepali_name,
          icon: 'list',
          class: '',
          subForms: value.sub_forms,
          tables: value.tables,
          icon_path : value.icon_path,
          id: value.id,
          nepali_name: value.nepali_name,
        }) ;
      });
    });
  }

  navigateToTable(tableId){
    this.router.navigate(['/guest/tables/'+tableId]);
  }

}
