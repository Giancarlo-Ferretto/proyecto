import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketsService } from '../../../services/tickets.service';
import { Ticket } from '../../../interfaces/ticket';
import { AuthService } from '../../../auth/auth.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.scss']
})
export class NewTicketComponent implements OnInit {
  ticketForm:FormGroup;
  profile:User = {name:"", lastname:"", password:"", email:"", rut:"", address:"", region:"", city:""};

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private ticketService:TicketsService, private router:Router) {
    this.ticketForm = this.formBuilder.group({
      priority:['', [Validators.required, Validators.maxLength(150)]],
      category:['', [Validators.required, Validators.maxLength(150)]],
      subject:['', [Validators.required, Validators.maxLength(150)]],
      description:['', [Validators.required, Validators.maxLength(2048)]]
    })
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profileData => {
      this.profile = profileData;
    });
  }

  onSubmit() {
    const ticket:Ticket = {
      priority:this.ticketForm.get('priority')?.value,
      category:this.ticketForm.get('category')?.value,
      subject:this.ticketForm.get('subject')?.value,
      description:this.ticketForm.get('description')?.value,
      status:"Abierto",
      userId:this.profile.ID || 0
    }

    this.ticketService.createTicket(ticket)
    .subscribe((data:any) => {
      this.router.navigate(['/ticket', data.ID || 0, 'ver']);
    },
    (error:any) => {
      console.log(error.error);
    }
    );

  }

}
