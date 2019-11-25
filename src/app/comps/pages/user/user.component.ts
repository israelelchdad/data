import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User[]=[]

  constructor(public svc:UserService) {
   
  
   }

  ngOnInit() {
    this.svc.getusers().subscribe(data=> this.users=data)
   }

  

}
