import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './src/app/components/home/home.component';
import { ItemListComponent } from './src/app/components/item-list/item-list.component';
import { ItemComponent } from './src/app/components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
