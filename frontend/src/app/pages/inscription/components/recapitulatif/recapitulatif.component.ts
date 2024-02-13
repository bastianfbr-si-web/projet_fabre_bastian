import { Component, OnInit } from '@angular/core';
import { FormulaireService } from '../../../../services/formulaire.service';
import { InscriptionForm } from '../../models/inscriptionForm';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recapitulatif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent implements OnInit {
  formData: InscriptionForm = new InscriptionForm('','','','','','','','','','','','', false)

  constructor(private formulaireService: FormulaireService) { }

  ngOnInit(): void {
    this.formulaireService.getFormData().subscribe(data => {
      this.formData = data;
    });
  }

  isValid(): boolean {
    return this.formData.valid;
  }
}
