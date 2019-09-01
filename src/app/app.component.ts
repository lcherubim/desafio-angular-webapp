import { UserDeviceService } from './services/user-device.service';
import { Component, OnInit } from '@angular/core';

import { LocationService } from './services/location.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    private user: LocationService,
    private get: UserDeviceService
  ) { }

  ngOnInit() {
    this.user.getUserPosition();
    this.get.DeviceInfo();
  }
}

