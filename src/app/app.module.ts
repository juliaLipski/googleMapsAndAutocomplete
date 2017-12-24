import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './wrap/nav-bar/nav-bar.component';
import { MapComponent } from './wrap/map/map.component';
import { DataComponent } from './wrap/data/data.component';
import { DataService } from './factory/DataService';
import {LatLong} from './factory/latLong';
import { WrapComponent } from './wrap/wrap.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapComponent,
    DataComponent,
    WrapComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOn05Dn-B6k6UwhXa1Wvgalo0_WpDLMUg',
     libraries: ["places"],
     region: 'IL'
    })
  ],
  providers: [DataService,LatLong],
  bootstrap: [AppComponent]
})
export class AppModule { }
