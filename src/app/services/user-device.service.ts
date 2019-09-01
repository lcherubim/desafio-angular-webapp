import { Injectable } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';
import { DeviceInfo } from '../models/device-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserDeviceService {

  public userDeviceInfo: DeviceInfo = null;

  public DeviceInfo() {
    this.userDeviceInfo = this.deviceService.getDeviceInfo();
  }

  constructor(private deviceService: DeviceDetectorService ) { }
}
