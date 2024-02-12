import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormulaireService } from '../services/formulaire.service';

@Component({
  selector: 'app-compte-formulaire',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './compte-formulaire.component.html',
  styleUrl: './compte-formulaire.component.css'
})
export class CompteFormulaireComponent implements OnInit {
  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder, private formulaireService: FormulaireService) {
    this.inscriptionForm = this.fb.group({
      civilite: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      code_postal: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pays: ['', Validators.required],
      login: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motdepasse: ['', Validators.required],
      mdp_conf: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      this.formulaireService.updateFormData(this.inscriptionForm.value);
      console.log('Formulaire valide, données envoyées');
    }
  }
}
