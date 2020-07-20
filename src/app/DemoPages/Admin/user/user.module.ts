import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';
import {UserComponent} from "./profile/user.component";
import {UserRoutingModule} from "./user-routing.module";
import {UserProfileComponent} from "./updateProfile/userProfile.component";
import {UserchangePasswordComponent} from "./changePassword/userchangePassword.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule, AngularFontAwesomeModule, ChartsModule, PerfectScrollbarModule,
    UserRoutingModule, PageTitleModule, NgApexchartsModule, NgbModule
  ],
  declarations: [UserComponent, UserProfileComponent, UserchangePasswordComponent],
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
export class UserModule { }
