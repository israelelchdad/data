import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/model/post';
import { Photos } from 'src/app/model/photos';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  posts:Post[]=[]
  photos:Photos[]=[]

  constructor(public pos:PostsService,public phot:PhotosService) { }

  ngOnInit() {
    this.pos.gettenlastpost().subscribe(data=>this.posts=data);
    this.phot.gettenlastphotos().subscribe(data=>this.photos=data)

  }

}
