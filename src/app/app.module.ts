import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessagesModule } from 'primeng/components/messages/messages';

import { AppComponent } from './app.component';
import { MessageComponent } from './shared/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
