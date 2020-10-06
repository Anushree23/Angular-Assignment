import { Component, OnInit } from '@angular/core';
import {IData} from './dataa';
import { DataaService } from './dataa.service';
@Component({
  selector: 'app-dataa',
  templateUrl: './dataa.component.html',
  styleUrls: ['./dataa.component.css']
})
export class DataaComponent implements OnInit {

  pageTitle="Your Weight Entries"
  data:IData[]
  constructor(private _data : DataaService) { 
    
  }

  ngOnInit(): void {
     this._data.getDataa().subscribe({next:q=>this.data=q})
  }

}
