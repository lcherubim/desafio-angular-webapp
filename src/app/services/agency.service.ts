import { Agency } from './../models/agency.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  public selectedAgency = new Agency();

  public agencyList = new Array<Agency>();

  public search() {
    this.agencyList = [
      { name: 'Agencia #01' },
      { name: 'Agencia #02' },
      { name: 'Agencia #03' },
      { name: 'Agencia #04' },
      { name: 'Agencia #05' },
      { name: 'Agencia #06' },
      { name: 'Agencia #07' },
      { name: 'Agencia #08' },
    ];
  }

  public select(agency: Agency) {
    this.selectedAgency = agency;
  }

  constructor() { }
}
