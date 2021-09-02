import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SERVICES } from '../service.config';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  
  constructor(private http: HttpClient) { }

  loadCompetitions(): Observable<any> {
    return this.http.get(SERVICES.competitions.path).pipe(
      tap( data => console.log(data))
    );
  }
}
