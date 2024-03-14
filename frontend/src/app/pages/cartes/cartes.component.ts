import { Component } from '@angular/core';
import { FormulaireCarteComponent } from '../../gestion-cartes/formulaire-carte/formulaire-carte.component';
import { ListeCartesComponent } from '../../gestion-cartes/liste-cartes/liste-cartes.component';
import { GestionCartesModule } from '../../gestion-cartes/gestion-cartes.module';

@Component({
  selector: 'app-cartes',
  standalone: true,
  imports: [GestionCartesModule],
  templateUrl: './cartes.component.html',
  styleUrl: './cartes.component.css'
})
export class CartesComponent {

}
