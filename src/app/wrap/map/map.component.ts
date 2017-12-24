import { Component, Input, OnChanges, NgZone, OnInit } from '@angular/core';
import { LatLong } from '../../factory/latLong';
import { Subscription } from 'rxjs/Subscription';
declare var google: any

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() mdata;
  lat: number;
  long: number;
  zoom: number;
  private map: any;

  constructor(private ngZone: NgZone, public latLong: LatLong) {
    this.subscription = this.latLong.getData().subscribe(({ lat, long }) => { this.lat = lat; this.long = long });
  }

  subscription: Subscription;
  private setCurrentPosition() {

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        this.lat = this.mdata[0].lat = position.coords.latitude;
        this.long = this.mdata[0].long = position.coords.longitude;
        this.zoom = 6;
      });
    }
  }

  ngOnInit() {
    this.setCurrentPosition()
  }
}
