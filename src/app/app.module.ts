import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopSalesListComponent } from './top-sales-list/top-sales-list.component';
import { TopSalesListItemComponent } from './top-sales-list/top-sales-list-item/top-sales-list-item.component';
import {TopSalesService} from './top-sales.service';

@NgModule({
  declarations: [
    AppComponent,
    TopSalesListComponent,
    TopSalesListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TopSalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
