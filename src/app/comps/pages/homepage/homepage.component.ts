import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/model/post';
import { Photos } from 'src/app/model/photos';
import { PhotosService } from 'src/app/services/photos.service';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit , OnDestroy {
 
  posts:Post[]=[]
  photos:Photos[]=[]
  index=0;
  maxindex=9;
  numberofinterval:number
 

  constructor(public pos:PostsService,public phot:PhotosService,public coms:CommentService) {
    
    this.setinterval1();

    
   }

  ngOnInit() {
   
      this.phot.gettenlastphotos().subscribe(data=>{
      this.photos=data
      // let postids:number[]=data.map(postitem=>postitem.id)
      // console.log("iam" +postids) 
      // this.coms.getcomentforpost(postids).subscribe(allcomment=>{
      //   console.log(allcomment[0].body)
      //   this.posts.forEach(post=>{
      //     post.mycoment=
      //     allcomment.filter(com=>{
      //       com.postId==post.id
            
      //     })
      //   })
      //   console.log("iam"+this.posts[0].mycoment[0].body) })
     });
      this.pos.gettenlastpost().subscribe(data=>this.posts=data);
     

   }
  
   chengclass() {
     let one=document.querySelectorAll('.lione')[this.index]
    console.log(one.className)
    one.className="lione";
    console.log(one.className)
    if(this.index==9){
     this.index=-1
    }
    let to=document.querySelectorAll('.lione')[++this.index]
    console.log(to.className)
    to.className="lione shoo"
    console.log( to.className)

    
  }
  setinterval1(){
   this.numberofinterval=window.setInterval(()=>{this.chengclass()},3000)
   console.log(this.numberofinterval);
   
  }
  ngOnDestroy(){
    
    clearInterval(this.numberofinterval)
  }
  
  
  

}

