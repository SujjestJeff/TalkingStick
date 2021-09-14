import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NameInputComponent } from './board/name-input/name-input.component';
import { TalkersComponent } from './board/talkers/talkers.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NameInputComponent,
    TalkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
