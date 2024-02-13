import { Component } from '@angular/core';
import { CompteFormulaireComponent } from "./components/compte-formulaire/compte-formulaire.component";
import { RecapitulatifComponent } from "./components/recapitulatif/recapitulatif.component";

@Component({
    selector: 'app-inscription',
    standalone: true,
    templateUrl: './inscription.component.html',
    styleUrl: './inscription.component.css',
    imports: [CompteFormulaireComponent, RecapitulatifComponent]
})
export class InscriptionComponent {

}
