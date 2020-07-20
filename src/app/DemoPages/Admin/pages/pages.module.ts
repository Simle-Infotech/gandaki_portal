import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';
import {PagesRoutingModule} from "./pages-routing.module";
import {PagesComponent} from "./pages.component";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule, AngularFontAwesomeModule, PerfectScrollbarModule,
    PagesRoutingModule, PageTitleModule, AngularEditorModule, MatFormFieldModule, MatSelectModule, FormsModule,
  ],
  declarations: [PagesComponent],
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
export class PagesModule { }
