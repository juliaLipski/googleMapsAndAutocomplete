import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../factory/DataService';

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.css']
})

export class WrapComponent implements OnInit {
  mdata = this.dataService.getData();
  constructor(private dataService: DataService) {
    
  }
  onChangeLocation() {
    this.mdata = this.dataService.getData();
    console.log(this.mdata)
  }

  ngOnInit() {
    this.mdata = this.dataService.getData();
  }
}
