import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Ticket } from '../../interfaces/ticket';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  list:Array<Ticket>=[];
  pageList:Array<Ticket>=[];

  constructor(private ticketsService:TicketsService) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    this.ticketsService.getTickets().subscribe(data => {
      this.list = data;
      this.pageList = this.list.slice(0, 10);
    });
  }

  pageChanged(event: PageChangedEvent) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.pageList = this.list.slice(startItem, endItem);
  }
}
