import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  eng_version: boolean = false
  appName = "APP LISTA DE TAREFAS"
  welcomeMSG = "Bem vindo!"


  changeLanguage(){
    if(this.eng_version){
      this.eng_version = false;
      this.appName = "APP LISTA DE TAREFAS"
      this.welcomeMSG = "Bem vindo!"
    }else{
      this.eng_version = true;
      this.appName = "TO-DO-LIST-APP"
      this.welcomeMSG = "Welcome!"

    }
  }
}
