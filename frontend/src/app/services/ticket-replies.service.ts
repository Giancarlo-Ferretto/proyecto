import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TicketReply } from '../interfaces/ticketReply';

@Injectable({
  providedIn: 'root'
})
export class TicketRepliesService {

  constructor(private http:HttpClient) { }

  createTicketReply(ticketReply:TicketReply) {
    return this.http.post<any>(`${environment.API_URL}ticketsreply`, ticketReply);
  }

  getTicketRepliesByTicketId(ticketId:number) {
    return this.http.get<TicketReply[]>(`${environment.API_URL}ticketsreply/${ticketId}`);
  }

  getTicketReplyById(ticketId:number) {
    return this.http.get<TicketReply>(`${environment.API_URL}ticketsreply/${ticketId}/id`);
  }
}