import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../../../services/general.service";
import {ListResponse, searchResponse, SinglePageResponse} from "../../../models/user";


@Component({
  selector: 'app-admin-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  selectedTableSlug;
  selectedContent;
  searchData;
  searchResults;

  constructor( private generalService: GeneralService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.searchResults = [];
    this.activatedRoute.params.subscribe(paramsId => {
      this.selectedTableSlug = paramsId.slug;
      this.generalService.getSearchDetails(this.selectedTableSlug).subscribe(response => {
        this.searchResults = response;
      });
    });
  }

  navigateToTable(tableId){
    console.log("Navigating to table");
    this.router.navigate(['/guest/tables/'+tableId]);
  }

}
