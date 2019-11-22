import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:Todo[]=[]
  

  constructor(public svc:TodoService) { }

  ngOnInit() {
    this.svc.gettodos().subscribe(data=>this.todos=data)
  }

}
