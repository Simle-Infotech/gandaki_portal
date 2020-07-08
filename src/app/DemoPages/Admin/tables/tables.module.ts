import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';
import {TablesRoutingModule} from "./tables-routing.module";
import {TablesComponent} from "./tables.component";
import {AgGridModule} from "ag-grid-angular";
import 'ag-grid-enterprise';
import {TableDataEntryComponent} from "./table-data-entry/table-data-entry.component";
import {TableDesignerComponent} from "./table-designer/table-designer.component";
import {TableDetailsComponent} from "./table-details/table-details.component";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {CheckboxRenderer} from "../checkBox-renderer.component";
import {TableIndicatorsComponent} from "./table-indicators/table-indicators.component";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule, AngularFontAwesomeModule, ChartsModule, PerfectScrollbarModule,
    TablesRoutingModule, PageTitleModule, NgApexchartsModule,AgGridModule.withComponents([CheckboxRenderer]),
    MatCardModule,
    MatTabsModule,
    MatIconModule,
  ],
  declarations: [TablesComponent, TableDataEntryComponent, TableDesignerComponent, TableDetailsComponent, CheckboxRenderer, TableIndicatorsComponent],
  providers: [
    {
      provide:
        PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
        DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    }
  ],

})
export class TablesModule { }
