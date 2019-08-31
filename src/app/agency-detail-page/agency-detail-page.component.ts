import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AgencyService } from './../services/agency.service';
import { Agency } from './../models/agency.model';
import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-agency-detail-page',
  templateUrl: './agency-detail-page.component.html',
  styleUrls: ['./agency-detail-page.component.scss']
})
export class AgencyDetailPageComponent implements OnInit {

  public selectedAgency = new Agency();

  public back() {
    this.router.navigate(['agencias']);
  }

  constructor(
    private agency: AgencyService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.agency.selectedAgency.constructor === Object) {
      this.selectedAgency = this.agency.selectedAgency;
    } else {
      this.router.navigate(['']);
    }
  }

}
