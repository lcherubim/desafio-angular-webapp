import { Component, OnInit } from '@angular/core';

import { Agency } from './../models/agency.model';
import { Router } from '@angular/router';
import { AgencyService } from '../services/agency.service';

@Component({
  selector: 'app-agency-list-page',
  templateUrl: './agency-list-page.component.html',
  styleUrls: ['./agency-list-page.component.scss']
})
export class AgencyListPageComponent implements OnInit {

  public agencyList: Array<Agency>;

  public showDetail(agency: Agency) {
    this.agency.select(agency);
    this.router.navigate(['detalhe']);
  }

  constructor(
    private router: Router,
    private agency: AgencyService) { }

  ngOnInit() {
    if (this.agency.agencyList.length > 0) {
      this.agencyList = this.agency.agencyList;
    } else {
      this.router.navigate(['']);
    }
  }

}
