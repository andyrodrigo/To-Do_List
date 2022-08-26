import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeLanguage()
  }

  eng_version: boolean = true
  appName = "TO-DO-LIST-APP"
  welcomeMSG = "Welcome, Anderson!"


  changeLanguage(){
    if(this.eng_version){
      this.eng_version = false;
      this.appName = "APP LISTA DE TAREFAS"
      this.welcomeMSG = "Bem vindo, Anderson!"
    }else{
      this.eng_version = true;
      this.appName = "TO-DO-LIST-APP"
      this.welcomeMSG = "Welcome, Anderson!"

    }
    console.log( "home: " + this.eng_version)
  }

}
