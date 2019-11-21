import { Component, OnInit } from '@angular/core';
import { Post } from '../../../model/post';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[]=[]

  constructor(public svc:PostsService) { }

  ngOnInit() {
    this.svc.getposts().subscribe(data=> this.posts=data)
  }

}
