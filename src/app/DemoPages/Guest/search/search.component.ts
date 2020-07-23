import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GeneralService} from "../../../services/general.service";
import {ListResponse, SinglePageResponse} from "../../../models/user";


@Component({
  selector: 'app-admin-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  selectedTableSlug;
  selectedContent;
  searchData;
  constructor( private generalService: GeneralService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.selectedTableSlug = paramsId.slug;
      this.generalService.getSearchDetails(this.selectedTableSlug).subscribe((response : SinglePageResponse) => {
        console.log(response);
      });
    });
  }

  navigateToTable(tableId){
    this.router.navigate(['/guest/tables/'+tableId]);
  }

}
