import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile:User = {name:"", lastname:"", password:"", email:"", rut:"", address:"", region:"", city:""};

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profileData => this.profile = profileData);
  }
}
