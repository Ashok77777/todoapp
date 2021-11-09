
import { Component, OnInit, ViewChild } from '@angular/core';

  



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
    public lat: any;
  public lng: any;
  
  isShowTextBox=false;
  
  
  newtask:string="";
  searchText : string ="";
  
  taskList:string[]=[

];



ngOnInit(): void
{



if(localStorage.getItem('my_tasks'))
{
  this.taskList = JSON.parse(localStorage.getItem('my_tasks')|| '{}')

}


}

todoadd()
{
this.taskList.push(this.newtask);
localStorage.setItem('my_tasks' ,JSON.stringify(this.taskList)  )
this.newtask='';
this.isShowTextBox=false;
}
removetask(index:number)
{
this.taskList.splice(index,1)
localStorage.setItem('my_tasks',JSON.stringify(this.taskList))

}
onclick(index:number)
{ 


}



}
