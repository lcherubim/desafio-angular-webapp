import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AgencyService } from '../services/agency.service';

@Component({
  selector: 'app-agency-search-page',
  templateUrl: './agency-search-page.component.html',
  styleUrls: ['./agency-search-page.component.scss']
})
export class AgencySearchPageComponent implements OnInit {

  public search() {
    this.agency.search();
    this.router.navigate(['agencias']);
  }

  constructor(
    private agency: AgencyService,
    private router: Router) { }

  ngOnInit() {
  }

}
