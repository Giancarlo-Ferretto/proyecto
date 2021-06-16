import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../interfaces/user';
import * as rutValidator from './utils/rutValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  failedRegister:boolean = false;
  failedMessage:string = "";

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      rut: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      region: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      city: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(150)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  rutValidator() {
    if(rutValidator.check(this.registerForm.get('rut')?.value)) return {invalid:false}; 
    return {invalid:true};
  }

  passwordValidator() {
    if(this.registerForm.get('password')?.value !== this.registerForm.get('confirmPassword')?.value) {
      return {mismatch:true};
    }
    return {mismatch:false};
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const user:User = {
      name:this.registerForm.get('name')?.value,
      lastname:this.registerForm.get('lastname')?.value,
      rut:this.registerForm.get('rut')?.value,
      address:this.registerForm.get('address')?.value,
      region:this.registerForm.get('region')?.value,
      city:this.registerForm.get('city')?.value,
      email:this.registerForm.get('email')?.value,
      password:this.registerForm.get('password')?.value
    };

    this.authService.register(user)
    .subscribe((data:any) => {
      this.authService.storeToken(data);
      this.router.navigate(['']);
    },
    (error:any) => {
      this.authService.eraseToken();
      this.failedRegister = true;
      this.failedMessage = error.error.message;
      console.log(error.error);
    }
    );
  }

}
