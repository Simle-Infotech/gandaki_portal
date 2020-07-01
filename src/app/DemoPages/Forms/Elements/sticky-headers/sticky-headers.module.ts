import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things';
import { StickyHeadersComponent } from './sticky-headers.component';
import { StickyHeadersRoutingModule } from './sticky-headers-routing.module';
import { PageTitleModule } from '../../../../Layout/Components/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule, AngularStickyThingsModule,
    StickyHeadersRoutingModule, PageTitleModule
  ],
  declarations: [StickyHeadersComponent]
})
export class StickyHeadersModule { }
