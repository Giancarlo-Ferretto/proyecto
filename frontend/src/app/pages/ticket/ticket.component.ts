import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Ticket } from '../../interfaces/ticket';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  ticketId:number = 0;
  ticket:Ticket = {userId:0, status:"", priority:"", category:"", subject:"", description:""};

  constructor(private route:ActivatedRoute, private ticketService:TicketsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ticketId = params.id
      this.ticketService.getTicketById(this.ticketId).subscribe(ticketData => this.ticket = ticketData);
    });
  }
}
