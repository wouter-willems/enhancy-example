import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxEnhancyFormsModule} from "@klippa/ngx-enhancy-forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from "./material.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
