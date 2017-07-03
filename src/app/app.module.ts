import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FaceApiService } from "./services/index.services";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FaceApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
