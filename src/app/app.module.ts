import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencySearchPageComponent } from './agency-search-page/agency-search-page.component';
import { AgencyListPageComponent } from './agency-list-page/agency-list-page.component';
import { AgencyDetailPageComponent } from './agency-detail-page/agency-detail-page.component';
import { ActivityIndicatorComponent } from './activity-indicator/activity-indicator.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import {NgxMaskModule, IConfig} from 'ngx-mask';

let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    AgencySearchPageComponent,
    AgencyListPageComponent,
    AgencyDetailPageComponent,
    ActivityIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot(),
    NgxMaskModule.forRoot(options)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
