import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {TablesRoutingModule} from "./tables-routing.module";
import {TablesComponent} from "./tables.component";

@NgModule({
  imports: [
    CommonModule, NgbModule,
    TablesRoutingModule, AngularFontAwesomeModule
  ],
  declarations: [TablesComponent]
})
export class TablesModule { }
