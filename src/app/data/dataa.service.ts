import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { abort } from 'process';
import { Observable ,  throwError} from 'rxjs';
import {IData} from './dataa';
@Injectable({
  providedIn: 'root'
})
export class DataaService {
  private dataUrl:string = 'assets/products/D.json'

  constructor(private _httpClient:HttpClient) { }
  
// getData():IData[]{
//   return this.data;       
// }  

 getDataa():Observable<IData[]>{
//   console.log(this._httpClient.get<IData[]>(this.dataUrl).toPromise())
   return this._httpClient.get<IData[]>(this.dataUrl)
  }
}