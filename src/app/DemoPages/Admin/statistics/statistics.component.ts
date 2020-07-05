import { Component, OnInit } from '@angular/core';
import {ListResponse} from "../../../models/user";
import {GeneralService} from "../../../services/general.service";
import {Router} from "@angular/router";

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
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styles: []
})
export class StatisticsComponent implements OnInit {
  images = [];
  menuItems = [];
  responseData;

  constructor(private generalService: GeneralService, private router: Router) { }

  ngOnInit() {
    this.images.push(`http://202.45.146.221/media/1/6gandaki.jpg`);
    this.generalService.getSidebar().subscribe((response: ListResponse) => {
      this.responseData = response.data;
      this.responseData.forEach(value => {
        value.tables.forEach(table => {
          table.url = '/admin/tables/details/'+table.id;
        })
        this.menuItems.push({
          path: '/admin/',
          title: value.nepali_name,
          icon: 'list',
          class: '',
          subForms: value.sub_forms,
          tables: value.tables,
          id: value.id
        }) ;
      });
    });

  }

  navigateToTable(tableId){
    this.router.navigate(['/admin/tables/details/'+tableId]);
  }



}
