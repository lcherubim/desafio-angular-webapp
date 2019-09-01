import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AgencyDetail } from './../models/agency.model';
import { AgencyService } from './../services/agency.service';
import { UserDeviceService } from './../services/user-device.service';
import { LocationService } from './../services/location.service';
import { environment } from './../../environments/environment';

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

  public registerAccessData() {
    const url = environment.apiUrl;
    const body = {
      Id: 0,
      Latitude: this.user.userPosition.coords.latitude,
      Longitude: this.user.userPosition.coords.latitude,
      Device: this.device.userDeviceInfo.device,
      Browser: this.device.userDeviceInfo.browser,
      Number: this.agency.selectedAgency.formatted_phone_number
    };
    const httpOptions = {
      headers: new HttpHeaders({
        ContentType: 'application/json'
      }),
      responseType: 'text' as 'json'
    };
    return this.httpClient.post(url, body, httpOptions);
  }

  constructor(
    private agency: AgencyService,
    private router: Router,
    private httpClient: HttpClient,
    private user: LocationService,
    private device: UserDeviceService
  ) { }

  ngOnInit() {
    if (this.agency.selectedAgency.constructor === Object) {
      this.selectedAgency = this.agency.selectedAgency;
      this.registerAccessData().subscribe((res) => {
      }, error => console.log(error));
    } else {
      this.router.navigate(['']);
    }
  }

}
