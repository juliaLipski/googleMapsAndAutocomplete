import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit, OnChanges {
  isValid: boolean = true;
  constructor() {
  }
  @Input() mdata
  ngOnInit() {
  }
  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes['mdata'] && this.mdata) {
      this.mdata.length !== 0 ? this.isValid = true : this.isValid = false;
    }
  }
}
