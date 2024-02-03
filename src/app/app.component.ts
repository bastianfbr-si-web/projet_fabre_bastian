import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/* Components */
import { CompteFormulaireComponent } from './compte-formulaire/compte-formulaire.component';
import { FooterComponent } from './footer/footer.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { TetiereComponent } from './tetiere/tetiere.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompteFormulaireComponent, FooterComponent, RecapitulatifComponent, RouterOutlet, TetiereComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp_2';
}
