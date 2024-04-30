import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Smartphone } from '../pages/smartphones/models/smartphone';
import { environment } from '../environments/environment';


@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }
    public getSmartphones () : Observable<Smartphone[]> {
        return this.http.get<Smartphone[]>(`${environment.backendClient}/smartphones`);
    }

    public searchSmartphones(queryParams: { nom?: string; marque?: string; prixMin?: number; prixMax?: number }): Observable<Smartphone[]> {
      const params = new HttpParams({
      fromObject: queryParams
      });
    return this.http.get<Smartphone[]>(`${environment.backendClient}/smartphones`, { params });
  }

    public getMarques () : Observable<string[]> {
        return this.http.get<string[]>(`${environment.backendClient}/smartphones/marques`);
    }
}
