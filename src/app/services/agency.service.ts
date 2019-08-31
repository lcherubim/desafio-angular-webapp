import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agency, AgencyDetail } from '../models/agency.model';


@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  public selectedAgency = new AgencyDetail();

  public agencyList = new Array<any>();

  public select(agencyDetail: AgencyDetail) {
    this.selectedAgency = agencyDetail;
  }

  constructor() { }
}
