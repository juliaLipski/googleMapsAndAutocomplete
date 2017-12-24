import { Component, EventEmitter, ElementRef, NgModule, NgZone, OnInit, ViewChild, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { LatLong } from '../../factory/latLong';
declare var google: any

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  private latitude: number;
  private longitude: number;
  private searchControl: FormControl;
  private map: any;
  private zoom: number;
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private latLong: LatLong
  ) { }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["(cities)"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place = autocomplete.getPlace();
          let location = place.geometry.location;

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 8;
        })
      })
    })
  }

  @Output() changeLocation = new EventEmitter();
  getLocation() {
    this.latLong.setData(this.latitude, this.longitude);
    this.changeLocation.emit();
  }
  getLocationEn() {
    console.log(99);
    this.latLong.setData(this.latitude, this.longitude);
    this.changeLocation.emit();
  }
}
