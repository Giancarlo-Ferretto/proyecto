import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { Ticket } from '../../interfaces/ticket';
import { TicketReply } from '../../interfaces/ticketReply';
import { TicketRepliesService } from '../../services/ticket-replies.service';
import { TicketsService } from '../../services/tickets.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  profile:User = {name:"", lastname:"", password:"", email:"", rut:"", address:"", region:"", city:""};
  ticketId:number = 0;
  ticket:Ticket = {userId:0, status:"", priority:"", category:"", subject:"", description:""};
  ticketReplies:Array<TicketReply> = [];
  replyForm:FormGroup;

  constructor(
    private route:ActivatedRoute, 
    private ticketService:TicketsService, 
    private ticketRepliesService:TicketRepliesService, 
    private formBuilder:FormBuilder) { 

    this.replyForm = this.formBuilder.group({
      status: new FormControl('', [Validators.required]),
      reply: new FormControl('', [Validators.required, Validators.maxLength(1028)])
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.profile = data.profile
      this.getTicketByRoute();
    });
  }

  isAdmin() {
    return this.profile.isAdmin;
  }

  getTicketByRoute() {
    this.route.params.subscribe(params => {
      this.ticketId = params.id;
      this.getTicketById();
    });
  }

  getTicketById() {
    this.ticketService.getTicketById(this.ticketId).subscribe(data => {
      this.ticket = data;
      this.getTicketRepliesByTicketId(this.ticket.ID || 0);
    });
  }

  getTicketRepliesByTicketId(ticketId:number) {
    this.ticketRepliesService.getTicketRepliesByTicketId(ticketId).subscribe(data => {
      this.ticketReplies = data;
    });
  }

  onSubmit() {
    //update ticket status
    if(this.replyForm.get('status')?.value === "EN PROCESO") this.ticket.status = "En proceso";
    else if(this.replyForm.get('status')?.value === "CERRADO") this.ticket.status = "Cerrado";
  
    this.ticketService.updateTicketById(this.ticket).subscribe();

    //create ticketreply
    const ticketReply:any = {
      userId:this.profile.ID || 0,
      ticketId:this.ticket.ID || 0,
      reply:this.replyForm.get('reply')?.value
    };
    this.ticketRepliesService.createTicketReply(ticketReply).subscribe((data:any) => {
      ticketReply.ID = data.insertId;
      this.ticketRepliesService.getTicketReplyById(ticketReply.ID).subscribe((data:TicketReply) => {
        this.ticketReplies.push(data);
      });
    });
  }
}