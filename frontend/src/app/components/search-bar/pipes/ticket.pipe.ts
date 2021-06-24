import { Pipe, PipeTransform } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket';
import { Filter } from '../interfaces/filter';

@Pipe({
  name: 'TicketFilter',
  pure: false,

})
export class TicketPipe implements PipeTransform {

  transform(value: Ticket[], arg:Filter): any {
    const list:Array<Ticket>=[];

    if(arg.filter === "1") {
      for(let item of value) {
        if(item.category.toLowerCase().indexOf(arg.input.toLowerCase()) > -1) {
          list.push(item);
        }
      }
    }
    else if(arg.filter === "2") {
      for(let item of value) {
        if(item.subject.toLowerCase().indexOf(arg.input.toLowerCase()) > -1) {
          list.push(item);
        }
      }
    }
    else if(arg.filter === "3") {
      for(let item of value) {
        if(item.description.toLowerCase().indexOf(arg.input.toLowerCase()) > -1) {
          list.push(item);
        }
      }
    }
    else {
      return value;
    }

    return list;
  }

}
