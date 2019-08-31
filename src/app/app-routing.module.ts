import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencyListPageComponent } from './agency-list-page/agency-list-page.component';
import { AgencySearchPageComponent } from './agency-search-page/agency-search-page.component';
import { AgencyDetailPageComponent } from './agency-detail-page/agency-detail-page.component';

const routes: Routes = [
  {
    path: 'agencias',
    component: AgencyListPageComponent
  },
  {
    path: 'detalhe',
    component: AgencyDetailPageComponent
  },
  {
    path: '',
    component: AgencySearchPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
