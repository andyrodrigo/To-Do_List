import { Component, OnInit } from '@angular/core';
import { ItemToDo } from '../../interfaces/item-to-do';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  tasks: Array<ItemToDo> = [];

  constructor() { }

  ngOnInit(): void {
    let itens: any = localStorage.getItem('tasks');
    let oldTasks = JSON.parse( itens )
    if(!oldTasks){
      this.tasks = [];
    }else{
      this.tasks = oldTasks;
    }
  }

  //Functions:
  addTask( title: string ){
    console.log( title )
    const id = this.tasks.length + 1;
    this.tasks.push({
      id: id,
      title: title,
      done: false
    })
    localStorage.setItem('tasks', JSON.stringify(this.tasks) )
  }

  removeTask(task: any){
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks) )
  }

  editTask(task: any){
    let index = this.tasks.indexOf(task);
    this.tasks[index].done = true
    localStorage.setItem('tasks', JSON.stringify(this.tasks) )

    //let index = this.tasks.indexOf(task);
    //Pinçar a task dentro de tasks e mudar seu done de false para true
    //this.tasks.filter(task, index,)   //( (task) => task.done = true);
    //localStorage.setItem('tasks', JSON.stringify(this.tasks.filter(task, index) ) )
  }

}
