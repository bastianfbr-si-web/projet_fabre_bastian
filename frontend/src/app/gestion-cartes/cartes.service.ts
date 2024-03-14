import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Carte } from './cartes'

@Injectable({
  providedIn: 'root'
})
export class CartesService {
  private cartes: Carte[] = [
    { id: 1, nom: 'John Doe', code: '1234 5678 9012 3456', ccv: '123', expiration: '12/24' },
  ];

  constructor() { }

  getCartes(): Observable<Carte[]> {
    return of(this.cartes);
  }

  addCarte(carte: Carte): void {
    this.cartes.push(carte);
  }
}
