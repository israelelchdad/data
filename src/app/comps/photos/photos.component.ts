import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Photos } from 'src/app/model/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos:Photos[]=[]

  constructor(public svc:PhotosService) { }

  ngOnInit() {
    this.svc.getphotos()
    .subscribe(data=>this.photos=data)

  }

}
