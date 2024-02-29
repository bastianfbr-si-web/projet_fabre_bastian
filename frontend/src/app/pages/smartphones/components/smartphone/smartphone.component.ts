import { Component } from '@angular/core';
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
smartphone: Smartphone = {
  id: 1,
  name: 'Google Pixel 8 Pro',
  price: 1099,
  description: 'Le meilleur de Google au niveau pro.',
  brand: 'Google',
  color: 'Porcelaine',
  image: '/assets/pixel.jpg'
};

}
