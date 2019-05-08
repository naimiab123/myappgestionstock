import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {CookieService } from 'ngx-cookie-service';

@Injectable()
export class Xhinterceptor implements HttpInterceptor {

    constructor(private cookieService: CookieService) {}

 intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = this.cookieService.get('token');

    const xhr = req.clone(
        { headers: req.headers.set('authorization', `Basic ${token}`)});
      return next.handle(xhr);
    }
}
