import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {TablesRoutingModule} from "./tables-routing.module";
import {TablesComponent} from "./tables.component";
import {AgGridModule} from "ag-grid-angular";
import 'ag-grid-enterprise';
import {FormTablesComponent} from "./formTables.component";

@NgModule({
  imports: [
    CommonModule, NgbModule,
    TablesRoutingModule, AngularFontAwesomeModule, AgGridModule.withComponents([]),
  ],
  declarations: [TablesComponent, FormTablesComponent]
})
export class TablesModule { }
