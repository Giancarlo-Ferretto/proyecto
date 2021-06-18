import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http:HttpClient) { }

  createTicket(ticket:Ticket) {
    return this.http.post(`${environment.API_URL}tickets`, ticket);
  }

  getTickets() {
    return this.http.get<Ticket[]>(`${environment.API_URL}tickets`);
  }

  getTicketById(ticketId:number) {
    return this.http.get<Ticket>(`${environment.API_URL}tickets/${ticketId}`);
  }

  getTicketsByUserId(userId:number) {
    return this.http.get<Ticket[]>(`${environment.API_URL}tickets/${userId}/user`);
  }

  getTicketsByStatusUserId(status:string, userId:number) {
    return this.http.get<Ticket[]>(`${environment.API_URL}tickets/${userId}/user/${status}/status`);
  }

  updateTicketById(ticket:Ticket) {
    return this.http.put(`${environment.API_URL}tickets/${ticket.ID}`, ticket);
  }

  deleteTicketById(ticketId:number) {
    return this.http.delete(`${environment.API_URL}tickets/${ticketId}`);
  }
}
