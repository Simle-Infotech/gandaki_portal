import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartBoxes2Component } from './chart-boxes2.component';
import { ChartBoxes2RoutingModule } from './chart-boxes2-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, MatTabsModule, RoundProgressModule, NgbModule,
    ChartBoxes2RoutingModule, AngularFontAwesomeModule, PageTitleModule
  ],
  declarations: [ChartBoxes2Component]
})
export class ChartBoxes2Module { }
