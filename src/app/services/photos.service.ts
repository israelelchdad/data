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
  

  constructor(public http:HttpClient) { }
  getphotos():Observable<Photos[]>{
    return this.http.get<Photos[]>(this.api)

  }
}
