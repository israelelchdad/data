import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  location:string ="login";
 
  user:string

  constructor() { }

  chngeloc(name:string){
    console.log(name)
    this.location=name;
  }
}
