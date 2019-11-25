import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { LocationService } from '../../../services/location.service';
import { HederComponent } from 'src/app/general/heder/heder.component';
import { UserComponent } from '../user/user.component';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string="israel elchdad"
  pass:number=123456789
  

  constructor(public loc:LocationService,public usesvs:UserService) { }

  ngOnInit() {
    // setTimeout(() => {
    //   this.login()
      
    // }, 6000);
  }
  login(){
   let numuser=Math.floor((Math.random()*10)+1)
   console.log(numuser)
  this.usesvs.setcorentuser(numuser).subscribe(data=>this.usesvs.corentuser=data)
    // console.log(this.usesvs.corentuser.id)
    this.loginserver(this['user'],this['pass'])
    .subscribe(data=>{
       this.loc.user=this.user
      
    this.loc.location="homeepage"
  })

  }
  loginserver(user:string,pass:number):Observable<number>{
    return timer(1250)

  }

}
