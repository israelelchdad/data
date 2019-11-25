import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[]
  

  constructor(public svc:TodoService,public usersvc:UserService) { }

  ngOnInit() {
   
  }
  gettodosfromselect(){
   let sel= document.querySelector('select').value
   console.log(sel)
   if(sel=='mytodo'){
   this.getmytodo()
   }
   if(sel=='alltodo'){
     console.log("iiii");
     this.getalltodo()
    }
  }
   getmytodo(){
     this.svc.gettodoofmyuser(this.usersvc.corentuser.id).subscribe(data=>this.todos=data)


   }
   getalltodo(){
     console.log("ialltodorun");
     
    this.svc.gettodos().subscribe(data=>this.todos=data)

   }
  

}
