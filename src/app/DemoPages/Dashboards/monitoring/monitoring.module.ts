import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MonitoringComponent } from './monitoring.component';
import { MonitoringRoutingModule } from './monitoring-routing.module';

@NgModule({
  imports: [
    CommonModule, RoundProgressModule, NgApexchartsModule,
    MonitoringRoutingModule, AngularFontAwesomeModule
  ],
  declarations: [MonitoringComponent]
})
export class MonitoringModule { }
