import { ConsumerFicheComponent } from './consumer/consumer-fiche/consumer-fiche.component';
import { ConsumerListComponent } from './consumer/consumer-list/consumer-list.component';
import { AuthentificationGuard } from './login/authentification.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthentificationGuard]},
  {path: 'consumers', component: ConsumerListComponent, canActivate: [AuthentificationGuard]},
  {path: 'consumer', component: ConsumerFicheComponent, canActivate: [AuthentificationGuard]},
  {path: 'consumer/:id', component: ConsumerFicheComponent, canActivate: [AuthentificationGuard]},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
