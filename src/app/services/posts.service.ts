import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/post';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private api='https://jsonplaceholder.typicode.com/posts/'
  private usersapi='https://jsonplaceholder.typicode.com/posts/?userId=#'
  private apii= 'https://jsonplaceholder.typicode.com/posts/'
 selectedPost:Post

  constructor(private http:HttpClient) { }
  getposts():Observable<Post[]>{
    console.log("iam")
    return this.http.get<Post[]>(this.api)

  }
  gettenlastpost():Observable<Post[]>{
    this.apii+='?'
    for (let index = 91; index <=100; index++) {
      this.apii+=`id=${index}&`
      
    }
    return this.http.get<Post[]>(this.apii)
    
 }
  gettpostfmyuser(numbid:number):Observable<Post[]>{
    console.log("postservis get post run");
    
  return this.http.get<Post[]>(this.usersapi.replace('#',numbid.toString()))


}

}
