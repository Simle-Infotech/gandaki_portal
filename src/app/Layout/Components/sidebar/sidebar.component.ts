import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeOptions } from '../../../theme-options';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {GeneralService} from "../../../services/general.service";
import {ListResponse} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";

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
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public extraParameter: any;
  menuItems: any[];
  responseData;
  is_logged = false;

  constructor(
    public globals: ThemeOptions,
    private activatedRoute: ActivatedRoute,
    private generalService: GeneralService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {

  }

  @select('config') public config$: Observable<any>;

  private newInnerWidth: number;
  private innerWidth: number;
  activeId = 'dashboards';

  toggleSidebar() {
    this.globals.toggleSidebar = !this.globals.toggleSidebar;
    this.globals.sidebarHover = !this.globals.toggleSidebar;
  }

  sidebarHover() {
    this.globals.sidebarHover = !this.globals.sidebarHover;
  }

  sidebarHoverMouseOut() {
    this.globals.sidebarHover = false;
  }

  sidebarHoverMouseIn() {
    this.globals.sidebarHover = true;
  }


  ngOnInit() {
    setTimeout(() => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1200) {
        this.globals.toggleSidebar = true;
      }
    });

    this.extraParameter = this.activatedRoute.snapshot.firstChild.routeConfig.path;
    this.menuItems = ROUTES.filter(menuItem => menuItem);


    if (this.authenticationService.CurrentUserValue) {
      this.is_logged = true;
    }

    this.generalService.getSidebar().subscribe((response: ListResponse) => {
      this.responseData = response.data;
      this.responseData.forEach(value => {
        value.tables.forEach(table => {
          if(this.is_logged == true){
            table.url = '/admin/tables/details/'+table.id;
          } else{
            table.url = '/guest/tables/details/'+table.id;
          }
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
      console.log(this.menuItems);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;

    if (this.newInnerWidth < 1200) {
      this.globals.toggleSidebar = true;
    } else {
      this.globals.toggleSidebar = false;
    }

  }

  navigateToTable(tableId){
    if(this.is_logged == true){
      this.router.navigate(['/admin/tables/details/'+tableId]);
    } else{
      this.router.navigate(['/guest/tables/details/'+tableId]);
    }
  }
}
