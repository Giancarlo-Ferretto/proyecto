import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../../interfaces/ticket';
import { TicketsService } from '../../../services/tickets.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { User } from '../../../interfaces/user';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-open-tickets',
  templateUrl: './open-tickets.component.html',
  styleUrls: ['./open-tickets.component.scss']
})
export class OpenTicketsComponent implements OnInit {
  profile:User = {name:"", lastname:"", password:"", email:"", rut:"", address:"", region:"", city:""};
  list:Array<Ticket>=[];
  pageList:Array<Ticket>=[];

  constructor(private authService:AuthService, private ticketsService:TicketsService) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profileData => {
      this.profile = profileData;
      this.loadTickets();
    });
  }

  loadTickets() {
    this.ticketsService.getTicketsByStatusUserId("Abierto", this.profile.ID || 0).subscribe(data => {
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
