import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../../../services/general.service";
import {ListResponse, SinglePageResponse} from "../../../models/user";


@Component({
  selector: 'app-admin-guest-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {
  selectedPageSlug;
  selectedContent;
  constructor( private generalService: GeneralService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.selectedPageSlug = paramsId.slug;
      this.generalService.getPage(this.selectedPageSlug).subscribe((response : SinglePageResponse) => {
        this.selectedContent = response.data.content;
      });
    });
  }

  navigateToTable(tableId){
    this.router.navigate(['/guest/tables/'+tableId]);
  }

}
