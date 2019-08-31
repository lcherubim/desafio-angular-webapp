import { Injectable } from '@angular/core';

import { UserPosition } from '../models/UserPosition.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public userPosition = new UserPosition();

  public getUserPosition() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.userPosition = position;
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    }
  }

  constructor() { }
}
