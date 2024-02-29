import { Component } from '@angular/core';
import { SmartphoneComponent } from './components/smartphone/smartphone.component';

@Component({
  selector: 'app-smartphones',
  standalone: true,
  imports: [SmartphoneComponent],
  templateUrl: './smartphones.component.html',
  styleUrl: './smartphones.component.css'
})
export class SmartphonesComponent {

}
