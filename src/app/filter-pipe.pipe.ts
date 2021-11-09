import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(taskList:string[], searchText: string): any[] {
    
    if(!taskList)
    return [];
    if(!searchText)
    return taskList ;
    searchText=searchText.toLowerCase();
    return taskList.filter((task:string)=>
    {
      return task.toLowerCase().includes(searchText )
    })

  }

}
