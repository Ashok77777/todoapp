import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    FilterPipePipe
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
  
   
  
  
  ],

 

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
