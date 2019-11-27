import { Component, OnInit } from '@angular/core';
import { Post } from '../../../model/post';
import { PostsService } from '../../../services/posts.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[]=[]

  constructor(public svc:PostsService,public usersvc:UserService) { }

  ngOnInit() {
   
  }
  getpostsfromselect(){
    let sel= document.querySelector('select').value
    console.log(sel)
 
    this.svc.gettpostfmyuser(+sel).subscribe(d=>{
      console.log("my select run");
      this.posts=d
    })
 
     }
     getallposts(){
      this.svc.getposts().subscribe(data=> this.posts=data)

     }
     getmyposts(){
       console.log("my post run");
       
      this.svc.gettpostfmyuser(this.usersvc.corentuser.id).subscribe(data=>this.posts=data)
 
 
    }


}
