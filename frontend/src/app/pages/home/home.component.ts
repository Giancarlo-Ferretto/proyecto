import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile:User = {name:"", lastname:"", password:"", email:"", rut:"", address:"", region:"", city:""};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.profile = data.profile);
  }

  isAdmin() {
    return this.profile.isAdmin;
  }
}