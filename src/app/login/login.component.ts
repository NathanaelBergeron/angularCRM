import { AuthentificationService } from './authentification.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3), checkNoInPassword])
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    const user: any = this.authent.authentUser(this.loginForm.value.login, this.loginForm.value.password);
    if(user){
      this.router.navigateByUrl('home');
    }
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
