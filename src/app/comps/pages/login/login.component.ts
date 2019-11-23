import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { LocationService } from '../../../services/location.service';
import { HederComponent } from 'src/app/general/heder/heder.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string
  pass:number
  // ,public h:HederComponent

  constructor(public loc:LocationService,) { }

  ngOnInit() {
  }
  login(){
    console.log(this.user,this.pass)
    this.loginserver(this['user'],this['pass'])
    .subscribe(data=>{console.log(data)
      // this.h.user=this.user
       this.loc.user=this.user
      console.log(this.user)
    this.loc.location="homeepage"
  console.log(this.loc.location)})
  }
  loginserver(user:string,pass:number):Observable<number>{
    return timer(1250)

  }

}
