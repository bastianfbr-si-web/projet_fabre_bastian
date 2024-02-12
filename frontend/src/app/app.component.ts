import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/* Components */
import { CompteFormulaireComponent } from './components/compte-formulaire/compte-formulaire.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecapitulatifComponent } from './components/recapitulatif/recapitulatif.component';
import { TetiereComponent } from './components/tetiere/tetiere.component';

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
