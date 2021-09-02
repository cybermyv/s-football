import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const TOKEN = '35ece1af9ff04dd28ea9496048d9f34a';
        const request = req.clone({
            setHeaders: {
                'X-Auth-Token': TOKEN
            }
        });
        return next.handle(request);
    }
}