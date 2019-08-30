import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencySearchPageComponent } from './agency-search-page/agency-search-page.component';
import { AgencyListPageComponent } from './agency-list-page/agency-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AgencySearchPageComponent,
    AgencyListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
