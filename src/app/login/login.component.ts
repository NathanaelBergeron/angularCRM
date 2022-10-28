import { User } from './model/user';
import { AuthentificationService } from './authentification.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subs: Subscription[] = [];
  loginForm: FormGroup;
  errorMessagesLogin:{[key:string]: string} = {
    required: 'Identifiant Obligatoire',
    minlength: '3 caractères minimum'
  };
  errorMessagesPassword:{[key:string]: string} = {
    required: 'Identifiant Obligatoire',
    minlength: '3 caractères minimum',
    no$InPassword: 'Pas de $ dans le mot de passe'
  };

  constructor(private authent: AuthentificationService, private router:Router) {
    this.authent.disconnect();
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), checkNoInPassword])
    });
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
  }

  login(): void {
    this.subs.push(this.authent.authentUser(this.loginForm.value.login, this.loginForm.value.password).subscribe({
      next: (user: User) => this.router.navigateByUrl('/home'),
      error: (error: Error) => console.error("Erreur de connexion : login ou mot de passe invalide."),
      complete: () => {}
    }));
  }

}

function checkNoInPassword(c:AbstractControl) : ValidationErrors | null {
  if ((c.value as string).indexOf('$')<0){
    return null;
  }
  return {
    no$InPassword: true
  }
}
