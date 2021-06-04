import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecaptchaErrorParameters } from "ng-recaptcha";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form:FormGroup;

  constructor(public formBuilder:FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.min(1), Validators.max(150)]],
      recaptcha:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public resolved(captchaResponse: string): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

  onSubmit() {
    console.log(this.form.get('email')?.value + this.form.get('password')?.value);
  }

}
