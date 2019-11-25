import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[]
  corentuser:User
  private api='https://jsonplaceholder.typicode.com/users/'
  private apii='https://jsonplaceholder.typicode.com/users/?id='

  constructor(private http:HttpClient) {
  
   }
  getusers():Observable<User[]>{
    console.log("iam")
    return this.http.get<User[]>(this.api)

  }
  setcorentuser(numb:number):Observable<User>{
   this.apii+=numb;
   return this.http.get<User>(this.apii)
  }
}
