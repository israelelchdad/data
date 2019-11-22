import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Todo } from '../model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private api="https://jsonplaceholder.typicode.com/todos/"
  t:Todo

  constructor(public http:HttpClient) { }
  gettodos():Observable<Todo[]>{
    console.log('itodoservis')
    return this.http.get<Todo[]>(this.api)

  }

}
