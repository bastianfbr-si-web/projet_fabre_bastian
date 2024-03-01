import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Smartphone } from './models/smartphone';
import { Observable } from 'rxjs';
import { SmartphoneComponent } from "./components/smartphone/smartphone.component";
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
    providers: [ApiService],
    selector: 'app-smartphones',
    standalone: true,
    templateUrl: './smartphones.component.html',
    styleUrl: './smartphones.component.css',
    imports: [AsyncPipe, CommonModule, HttpClientModule, SmartphoneComponent]
})
export class SmartphonesComponent{

  protected smartphone$ : Observable<Smartphone[]>

  constructor(private apiService : ApiService) {
    this.smartphone$ = this.apiService.getSmartphones();
    console.log(this.smartphone$);
  }
}
