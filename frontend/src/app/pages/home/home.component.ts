import { Component } from '@angular/core';
import { RecapitulatifComponent } from "../../components/recapitulatif/recapitulatif.component";
import { CompteFormulaireComponent } from "../../components/compte-formulaire/compte-formulaire.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RecapitulatifComponent, CompteFormulaireComponent]
})
export class HomeComponent {

}
