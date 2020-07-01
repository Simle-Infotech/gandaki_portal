
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MailboxComponent } from './mailbox.component';
import { MailBoxRoutingModule } from './mailbox-routing.module';

@NgModule({
  imports: [
    CommonModule, AngularFontAwesomeModule,
    MailBoxRoutingModule, NgbModule,
  ],
  declarations: [MailboxComponent]
})
export class MailBoxModule { }
