import { User } from './model/user';
import { Injectable } from '@angular/core';

const KEY_USER = 'angularCRM.user';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private user?: User;

  constructor() {
    if (!!sessionStorage.getItem(KEY_USER)) {
      this.user = JSON.parse(sessionStorage.getItem(KEY_USER)!);
    }
  }

  authentUser(login: string, password: string): User {
    this.user = {
      id: 1,
      login: login,
      lastname: 'Doe',
      firstname: 'John'
    };
    sessionStorage.setItem(KEY_USER, JSON.stringify(this.user));
    return this.user;
  }

  get authenticated () {
    return !!this.user;
  }

  disconnect(): void {
    sessionStorage.clear();
    this.user = undefined;
  }


}
