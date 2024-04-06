import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { SmartphoneState } from '../../store/states/smartphones-state';
import { Observable } from 'rxjs';
import { Smartphone } from '../smartphones/models/smartphone';
import { SupprimerSmartphone } from '../../store/actions/smartphone-action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  constructor(private store: Store) { }

  @Select (SmartphoneState.getSmartphones) smartphones$!: Observable<Smartphone[]>;

  supprimerSmartphone(smartphone: Smartphone) {
    this.store.dispatch(new SupprimerSmartphone(smartphone));
  }
}
