import { Component, Input } from '@angular/core';
import { Smartphone } from '../../models/smartphone';

@Component({
  selector: 'app-smartphone',
  standalone: true,
  imports: [],
  templateUrl: './smartphone.component.html',
  styleUrl: './smartphone.component.css'
})
export class SmartphoneComponent {
addToCart() {
  throw new Error('Method not implemented.');
}
  @Input()
  public declare smartphone: Smartphone;

  constructor() { }

  ngOnInit(): void {
  }

}
