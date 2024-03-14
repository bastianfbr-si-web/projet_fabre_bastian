import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaireCarteComponent } from './formulaire-carte/formulaire-carte.component';
import { ListeCartesComponent } from './liste-cartes/liste-cartes.component';
import { CaviarcartePipe } from './liste-cartes/caviarcarte.pipe';

@NgModule({
  declarations: [CaviarcartePipe, FormulaireCarteComponent, ListeCartesComponent],
  imports: [
    CommonModule, ReactiveFormsModule,
  ],
  exports: [FormulaireCarteComponent, ListeCartesComponent]
})
export class GestionCartesModule { }
