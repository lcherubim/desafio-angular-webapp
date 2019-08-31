import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LocationService } from '../services/location.service';
import { CustomValidators } from './../models/custom-validators';
import { AgencyService } from '../services/agency.service';

declare var google;

@Component({
  selector: 'app-agency-search-page',
  templateUrl: './agency-search-page.component.html',
  styleUrls: ['./agency-search-page.component.scss']
})
export class AgencySearchPageComponent implements OnInit {

  @ViewChild('map') mapElement: ElementRef;

  public searchForm: FormGroup;

  public isLoading = false;

  public search() {
    Object.keys(this.searchForm.controls).forEach(field => {
      const control = this.searchForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
    if (this.searchForm.valid) {
      this.isLoading = true;
      const userRadius = this.searchForm.get('radius').value * 1000;
      const map = new google.maps.Map(this.mapElement.nativeElement);
      const service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: { lat: this.get.userPosition.coords.latitude, lng: this.get.userPosition.coords.longitude },
        radius: userRadius,
        name: 'Itaú',
        type: ['bank']
      }, (results) => {
        this.agency.agencyList = results;
        this.ngZone.run(() => this.router.navigate(['agencias'])).then();
        this.isLoading = false;
      });
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private get: LocationService,
    private ngZone: NgZone,
    private agency: AgencyService
  ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      radius: [null, [Validators.required, CustomValidators.isValidRadius()]]
    });
  }

}
