import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LatLong {

    private subject = new Subject();

    getData() {
        return this.subject.asObservable();
    }
    setData(lat: number, long: number) {
        this.subject.next({ lat: lat, long: long });
    }
}
