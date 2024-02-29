import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs';
import { Smartphone } from '../pages/smartphones/models/smartphone';
import { environment } from '../environments/environment';


@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }
    public getSmartphones () : Observable<Smartphone[]> {
        return this.http.get<Smartphone[]>(environment.backendClient);
    }
}
