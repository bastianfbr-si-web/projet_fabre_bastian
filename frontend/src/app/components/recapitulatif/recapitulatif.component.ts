import { Component, OnInit } from '@angular/core';
import { FormulaireService } from '../../services/formulaire.service';
import { InscriptionForm } from '../../interfaces/inscriptionForm';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recapitulatif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {
  formData: InscriptionForm = new InscriptionForm('','','','','','','','','','','','')

  constructor(private formulaireService: FormulaireService) { }

  ngOnInit(): void {
    this.formulaireService.getFormData().subscribe(data => {
      this.formData = data;
    });
  }

  isValid(): boolean {
    return this.formData.adresse !== '' &&
    this.formData.civilite !== '' &&
    this.formData.code_postal !== '' &&
    this.formData.email !== '' &&
    this.formData.login !== '' &&
    this.formData.motdepasse !== '' &&
    this.formData.mdp_conf !== '' &&
    this.formData.nom !== '' &&
    this.formData.pays !== '' &&
    this.formData.prenom !== '' &&
    this.formData.telephone !== '' &&
    this.formData.ville !== '';
  }
}
