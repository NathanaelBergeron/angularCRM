import { User } from './model/user';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const KEY_USER = 'angularCRM.user';
const JWT_TOKEN: string = 'angularDRM.JWT';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private user?: User;
  private jwt_token?: string;

  constructor(private http: HttpClient) {
    if (!!sessionStorage.getItem(KEY_USER)) {
      this.user = JSON.parse(sessionStorage.getItem(KEY_USER)!);
      this.jwt_token = sessionStorage.getItem(JWT_TOKEN)!;
    }
  }

  authentUser(login: string, password: string): Observable<User> {
    return this.http.post<AuthentResponse>('/api/auth/login', {email: login, password: password}).pipe(
      map((result: AuthentResponse) => {
          this.user = result.user;
          this.jwt_token = result.token;

          sessionStorage.setItem(KEY_USER, JSON.stringify(this.user));
          sessionStorage.setItem(JWT_TOKEN, this.jwt_token);
          
          return this.user;
      })
    );
  }

  get token(): string | undefined{
    return this.jwt_token;
  }

  get authenticated () {
    return !!this.user;
  }

  disconnect(): void {
    sessionStorage.clear();
    this.user = undefined;
  }


}

interface AuthentResponse {
  user: User,
  token: string
}
