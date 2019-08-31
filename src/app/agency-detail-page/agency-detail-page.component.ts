import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AgencyDetail } from './../models/agency.model';
import { AgencyService } from './../services/agency.service';

@Component({
  selector: 'app-agency-detail-page',
  templateUrl: './agency-detail-page.component.html',
  styleUrls: ['./agency-detail-page.component.scss']
})
export class AgencyDetailPageComponent implements OnInit {

  public isLoading = true;

  public selectedAgency: AgencyDetail = {
    name: null,
    formatted_phone_number: null,
    opening_hours: {
        weekday_text: [null, null, null, null, null, null, null]
    }
  };

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
