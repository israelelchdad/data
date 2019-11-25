import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private api="https://jsonplaceholder.typicode.com/todos/"
  private apii="https://jsonplaceholder.typicode.com/todos/?userId=#"
  t:Todo

  constructor(public http:HttpClient,public usersvc:UserService) { }
  gettodos():Observable<Todo[]>{
    console.log('itodoservis')
    return this.http.get<Todo[]>(this.api)

  }
  gettodoofmyuser(numbid:number):Observable<Todo[]>{
    // console.log(this.usersvc.corentuser);
    // this.usersvc.corentuser.id.toString())
    
  
    return this.http.get<Todo[]>(this.apii.replace('#',numbid.toString()))


  }

}
