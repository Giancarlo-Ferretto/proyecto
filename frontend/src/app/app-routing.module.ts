import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { OpenTicketsComponent } from './pages/tickets/open-tickets/open-tickets.component';
import { PendingTicketsComponent } from './pages/tickets/pending-tickets/pending-tickets.component';
import { ClosedTicketsComponent } from './pages/tickets/closed-tickets/closed-tickets.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { AllTicketsComponent } from './pages/tickets/all-tickets/all-tickets.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"", component:HomeComponent, canActivate: [AuthGuard]},
  {path:"ticket/:id", component:TicketComponent, canActivate: [AuthGuard]},
  //{path:"ticket/nuevo", component:OpenTicketsComponent, canActivate: [AuthGuard]},
  {path:"tickets/abiertos", component:OpenTicketsComponent, canActivate: [AuthGuard]},
  {path:"tickets/enproceso", component:PendingTicketsComponent, canActivate: [AuthGuard]},
  {path:"tickets/cerrados", component:ClosedTicketsComponent, canActivate: [AuthGuard]},
  {path:"tickets/historico", component:AllTicketsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
