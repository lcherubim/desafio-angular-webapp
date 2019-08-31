import { Component, OnInit } from '@angular/core';

import { LocationService } from './services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private get: LocationService) {}

  ngOnInit() {
    this.get.getUserPosition();
  }
}

