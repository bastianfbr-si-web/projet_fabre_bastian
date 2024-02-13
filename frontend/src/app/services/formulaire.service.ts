import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InscriptionForm } from '../interfaces/inscriptionForm';

@Injectable({
  providedIn: 'root'
})
export class FormulaireService {
  private formulaireData = new BehaviorSubject<InscriptionForm>(new InscriptionForm('', '', '', '', '', '', '', '', '', '', '', '', false));

  constructor() { }

  updateFormData(data: any) {
    this.formulaireData.next(data);
  }

  getFormData() {
    return this.formulaireData.asObservable();
  }
}
