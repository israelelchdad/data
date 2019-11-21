import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[]
  private api='https://jsonplaceholder.typicode.com/users/'

  constructor(private http:HttpClient) {
  
   }
  getusers():Observable<User[]>{
    console.log("iam")
    return this.http.get<User[]>(this.api)

  }
}
