import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  location:string ="homeepage"

  constructor() { }

  chngeloc(name:string){
    console.log(name)
    this.location=name;
  }
}
