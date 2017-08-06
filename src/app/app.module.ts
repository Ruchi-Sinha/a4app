import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTableModule } from "ng2-data-table";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { SupportComponent } from './components/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
