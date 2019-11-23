import { Component, OnInit, Input } from '@angular/core';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {
  @Input() user:string=''


  constructor(public loc:LocationService) {
   
   
   }
   

  ngOnInit() {
     this.user=this.loc.user
  }

}
