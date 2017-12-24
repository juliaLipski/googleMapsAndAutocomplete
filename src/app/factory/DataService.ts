import { data } from './data';
import { DataType } from './dataType';
import { Injectable } from '@angular/core';
import { LatLong } from '../factory/latLong';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class DataService {
    lat: number;
    long: number;
    s = [];
    mdata: DataType[] = data;
    constructor(public latLong: LatLong) {
        this.subscription = this.latLong.getData().subscribe(({ lat, long }) => { this.lat = lat; this.long = long });
    }
    subscription: Subscription;

    private calculatePlasesAround() {
        this.s = [];
        this.subscription = this.latLong.getData().subscribe(({ lat, long }) => { this.lat = lat; this.long = long });
        var R = 6371000;
        var lat1 = this.lat ? this.lat : 32.0997729;
        var lon1 = this.long ? this.long : 34.89513950000003;
        var toRadians = function (degree) {
            return degree * (Math.PI / 180);
        };
        var φ1 = toRadians(lat1);
        this.mdata.forEach(item => {
            var lat2 = item.lat;
            var lon2 = item.long;
            var φ2 = toRadians(lat2);
            var Δφ = toRadians(lat2 - lat1);
            var Δλ = toRadians(lon2 - lon1);
            var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = R * c;
            if (d <= 20000) {
                // console.log(item);
                this.s.push(item)
            };
        })
        // console.log(this.s);
        return this.s;
    };
    getData() {
        return this.calculatePlasesAround();
    };
}