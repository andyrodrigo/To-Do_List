import { Component, Input, OnInit } from '@angular/core';
import { ItemToDo } from '../../interfaces/item-to-do';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  tasks: Array<ItemToDo> = [];
  showTasks: Array<ItemToDo> = [];

  @Input() eng_version: boolean = false ;

  addButtonName = "Adicionar"
  filterButtonName = "Filtrar"
  dropItemAllName = "TODOS"
  dropItemDoneName = "FEITOS"
  dropItemUndoneName = "NÃO FEITOS"
  searchPlaceholderName = "Buscar"
  newtaskPlaceholderName = "Nova Tarefa"

  constructor() { }

  ngOnInit(): void {
    let itens: any = localStorage.getItem('tasks');
    let oldTasks = JSON.parse( itens )
    if(oldTasks){
      this.tasks = oldTasks;
    }else{
      this.tasks = [];
    }
    this.showTasks = this.tasks
  }

  //Functions:
  addTask( title: string ){
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
    this.tasks[index].done = task.done
    localStorage.setItem('tasks', JSON.stringify(this.tasks) )
  }

  changeTask(task: any){
    let index = this.tasks.indexOf(task);
    this.tasks[index].title = task.title
    localStorage.setItem('tasks', JSON.stringify(this.tasks) )
  }

  changeLanguage(){
    if(this.eng_version){
      this.eng_version = false;
      this.addButtonName = "Adicionar"
      this.filterButtonName = "Filtrar"
      this.dropItemAllName = "TODOS"
      this.dropItemDoneName = "FEITOS"
      this.dropItemUndoneName = "NÃO FEITOS"
      this.searchPlaceholderName = "Buscar"
      this.newtaskPlaceholderName = "Nova Tarefa"
    }else{
      this.eng_version = true;
      this.addButtonName = "Add"
      this.filterButtonName = "Filter"
      this.dropItemAllName = "ALL"
      this.dropItemDoneName = "DONE"
      this.dropItemUndoneName = "UNDONE"
      this.searchPlaceholderName = "Search"
      this.newtaskPlaceholderName = "New Task"

    }
  }

  filterBy( input: string ){    
    this.showTasks = this.tasks.filter(function ( task ) {
      return task.title.toLowerCase().indexOf(input.toLowerCase()) > -1
    });
  }

  filter( option: number ){
    switch(option){
      case 0:
          this.showTasks = this.tasks.filter(function ( task ) {
          return task.done === false
        });
        break;
      case 1:
        this.showTasks = this.tasks.filter(function ( task ) {
          return task.done === true
        });
        break;
      case 2:
        this.showTasks = this.tasks
        break;
      default:
        console.log("error")
    }
  }
}
