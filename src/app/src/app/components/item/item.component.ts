import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemToDo } from '../../interfaces/item-to-do';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  edition = false

  //From the Parent
  @Input() task: ItemToDo= {
    id: 0,
    title: '',
    done: false
  }

  //To the Parent
  @Output() remove: EventEmitter<any> = new EventEmitter;
  @Output() edit: EventEmitter<any> = new EventEmitter;
  @Output() change: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {}

  //Functions:

  removeTask(): void{
    this.remove.emit(this.task)
  }
  
  markAsDone(): void{
    if(this.task.done === false){
      this.task.done = true
    }else{
      this.task.done = false
    }
    this.edit.emit(this.task)
    console.log( this.task )
  }

  editTask(): void{
    if(this.edition === false){
      this.edition = true
    }else{
      this.edition = false
    }
  }

  changeTask( newTask: string ): void{
    this.task.title = newTask
    this.change.emit(this.task)
  }

}
