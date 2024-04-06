import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Smartphone } from '../../models/smartphone';
import { AjouterSmartphone } from '../../../../store/actions/smartphone-action';

@Component({
  selector: 'app-smartphone',
  standalone: true,
  imports: [],
  templateUrl: './smartphone.component.html',
  styleUrl: './smartphone.component.css'
})
export class SmartphoneComponent {
addToCart() {
  this.store.dispatch(new AjouterSmartphone(this.smartphone));
}
  @Input()
  public declare smartphone: Smartphone;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
