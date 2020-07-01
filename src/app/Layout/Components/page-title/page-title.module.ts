import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PageTitleComponent } from './page-title.component';
import { PageTitleRoutingModule } from './page-title-routing.module';

@NgModule({
  imports: [
    CommonModule, AngularFontAwesomeModule,
    PageTitleRoutingModule,
  ],
  declarations: [PageTitleComponent],
  exports: [PageTitleComponent]
})
export class PageTitleModule { }
