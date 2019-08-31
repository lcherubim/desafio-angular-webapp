import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { Agency } from '../models/agency.model';
import { AgencyService } from '../services/agency.service';

declare var google;

@Component({
  selector: 'app-agency-list-page',
  templateUrl: './agency-list-page.component.html',
  styleUrls: ['./agency-list-page.component.scss']
})
export class AgencyListPageComponent implements OnInit {

  @ViewChild('map') mapElement: ElementRef;

  public agencyList: Array<any>;

  public isLoading = false;

  public showDetail(agency: Agency) {
    this.isLoading = true;
    const request = {
      placeId: agency.place_id,
      fields: ['name', 'formatted_phone_number', 'opening_hours']
    };
    const map = new google.maps.Map(this.mapElement.nativeElement);
    const service = new google.maps.places.PlacesService(map);
    service.getDetails(request, (result) => {
      this.agency.selectedAgency = result;
      this.ngZone.run(() => this.router.navigate(['detalhe'])).then();
      this.isLoading = false;
    });
  }

  constructor(
    private router: Router,
    private agency: AgencyService,
    private ngZone: NgZone) { }

  ngOnInit() {
    if (this.agency.agencyList.length > 0) {
      this.agencyList = this.agency.agencyList;
    } else {
      this.router.navigate(['']);
    }
  }

}
