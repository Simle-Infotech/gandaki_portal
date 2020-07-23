import { Component, OnInit } from '@angular/core';
import {GeneralService} from "../../../../../services/general.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {

  public isActive: any;
  public searchValue;

  constructor(
    private generalService: GeneralService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  getSearch(search_text){
    this.router.navigate(['guest/search/'+search_text])
  }

}
