import { AuthentificationService } from './../login/authentification.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JWTInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthentificationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const JWT_TOKEN = this.authService.token;
    const clone = req.clone({setHeaders: {Authorization: `Bearer ${JWT_TOKEN}`}});
    return next.handle(clone);
  }
}
