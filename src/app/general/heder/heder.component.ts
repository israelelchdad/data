import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit {

  constructor(public loc:LocationService) {
   
   }

  ngOnInit() {
  }

}
