import { AuthentificationService } from './../login/authentification.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JWTInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthentificationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }
}
