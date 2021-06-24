import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptor } from './services/token.interceptor';
import { OpenTicketsComponent } from './pages/tickets/open-tickets/open-tickets.component';
import { ClosedTicketsComponent } from './pages/tickets/closed-tickets/closed-tickets.component';
import { PendingTicketsComponent } from './pages/tickets/pending-tickets/pending-tickets.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { AllTicketsComponent } from './pages/tickets/all-tickets/all-tickets.component';
import { NewTicketComponent } from './pages/ticket/new-ticket/new-ticket.component';
import { AdminGuard } from './admin/admin.guard';
import { UsersComponent } from './admin/users/users.component';
import { TicketsComponent } from './admin/tickets/tickets.component';
import { Error403Component } from './pages/errors/error403/error403.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TicketPipe } from './components/search-bar/pipes/ticket.pipe';

export function tokenGetter() {
  return localStorage.getItem("access-token");
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    OpenTicketsComponent,
    ClosedTicketsComponent,
    PendingTicketsComponent,
    TicketComponent,
    AllTicketsComponent,
    NewTicketComponent,
    UsersComponent,
    TicketsComponent,
    Error403Component,
    SearchBarComponent,
    TicketPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200"]
      },
    }),
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    CollapseModule,
    AlertModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthGuard,
    AdminGuard,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
