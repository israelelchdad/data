import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../model/photos';
import {  } from 'selenium-webdriver/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private api="https://jsonplaceholder.typicode.com/photos/"
  private apii="https://jsonplaceholder.typicode.com/photos/?id=4990"

  

  constructor(public http:HttpClient) { }
  getphotos():Observable<Photos[]>{
    return this.http.get<Photos[]>(this.api)

  }
  gettenlastphotos():Observable<Photos[]>{
    for (let index = 4991; index <=5000; index++) {
      this.apii+="&id="+index
      
    }
    return this.http.get <Photos[]>(this.apii)
    
 }
}
