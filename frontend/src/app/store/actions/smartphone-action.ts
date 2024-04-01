import { Smartphone } from "../../pages/smartphones/models/smartphone";

export class AjouterSmartphone {
  static readonly type = '[Smartphone] Ajouter';

  constructor(public payload: Smartphone) {}
}

export class SupprimerSmartphone {
  static readonly type = '[Smartphone] Supprimer';

  constructor(public payload: Smartphone) {}
}
