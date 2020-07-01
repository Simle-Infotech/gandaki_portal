import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TrendModule } from 'ngx-trend';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';
import { CryptoComponent } from './crypto.component';
import { CryptoRoutingModule } from './crypto-routing.module';

@NgModule({
  imports: [
    CommonModule, AngularFontAwesomeModule, TrendModule, RoundProgressModule,
    CryptoRoutingModule, PageTitleModule, NgApexchartsModule
  ],
  declarations: [CryptoComponent]
})
export class CryptoModule { }
