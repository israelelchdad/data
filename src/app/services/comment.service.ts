import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commit } from '../model/commit';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
 
  api="https://jsonplaceholder.typicode.com/comments/?"

  constructor(public http:HttpClient) { }

  getcomentforpost(postids:number[]):Observable<Commit[]>{
     for (let index = 0; index <postids.length; index++) {
   this.api+=`postId=${postids[index]}&`
       
     }
     console.log("func",this.http.get <Commit[]>(this.api))
    return this.http.get <Commit[]>(this.api);
  }
}
