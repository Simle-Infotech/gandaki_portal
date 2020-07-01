import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  imports: [
    CommonModule, NgbModule,
    ChatRoutingModule, AngularFontAwesomeModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
