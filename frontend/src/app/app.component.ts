import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/* Components */
import { CompteFormulaireComponent } from './pages/inscription/components/compte-formulaire/compte-formulaire.component';
import { FooterComponent } from './common/footer/footer.component';
import { RecapitulatifComponent } from './pages/inscription/components/recapitulatif/recapitulatif.component';
import { HeaderComponent } from './common/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CompteFormulaireComponent, FooterComponent, RecapitulatifComponent, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hopla';
}
