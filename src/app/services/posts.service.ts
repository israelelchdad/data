import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/post';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private api='https://jsonplaceholder.typicode.com/posts/'
  private usersapi='https://jsonplaceholder.typicode.com/posts/?userId=#'

 selectedPost:Post

  constructor(private http:HttpClient) { }
  getposts():Observable<Post[]>{
    console.log("iam")
    return this.http.get<Post[]>(this.api)

  }
}
