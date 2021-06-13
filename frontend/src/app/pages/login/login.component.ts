import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecaptchaErrorParameters } from "ng-recaptcha";
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  failedLogin:boolean = false;
  
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      recaptcha: new FormControl('', [Validators.required]) 
    });
    this.authService.logout();
  }

  ngOnInit(): void {
  }

  //recaptcha
  captchaResolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  captchaOnError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

  //login
  onSubmit() {
    this.authService.login({email:this.loginForm.get('email')?.value, password:this.loginForm.get('password')?.value})
    .subscribe((data:any) => {
      this.authService.storeToken(data);
      this.router.navigate(['']);
    },
    (error:any) => {
      this.authService.eraseToken();
      this.failedLogin = true;
      console.log(error);
    }
    );
  }
}
