import { Component, OnInit } from '@angular/core';
import { Carte } from '../cartes';
import { CartesService } from '../cartes.service';

@Component({
  selector: 'app-liste-cartes',
  templateUrl: './liste-cartes.component.html',
  styleUrls: ['./liste-cartes.component.css']
})
export class ListeCartesComponent implements OnInit {
  cartes: Carte[] = [];

  constructor(private cartesService: CartesService) {}

  ngOnInit(): void {
    this.getCartes();
  }

  getCartes(): void {
    this.cartesService.getCartes().subscribe({
      next: (cartes) => this.cartes = cartes,
      error: (err) => console.error('Erreur lors de la récupération des cartes: ', err)
    });
  }

  // Ajoutez d'autres méthodes selon vos besoins, par exemple pour gérer la suppression ou l'édition des cartes
}
