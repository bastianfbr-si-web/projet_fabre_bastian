import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Carte } from '../cartes';
import { CartesService } from '../cartes.service';

@Component({
  selector: 'app-formulaire-carte',
  templateUrl: './formulaire-carte.component.html',
  styleUrls: ['./formulaire-carte.component.scss']
})
export class FormulaireCarteComponent implements OnInit {
  carteForm = this.fb.group({
    nom: ['', [Validators.required]],
    code: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
    ccv: ['', [Validators.required, Validators.pattern(/^[0-9]{3}$/)]],
    expiration: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)]]
  });

  constructor(private fb: FormBuilder, private cartesService: CartesService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const id = Math.floor(Math.random() * 1000);
    this.cartesService.addCarte({ id, ...this.carteForm.value } as Carte);
  }
}
