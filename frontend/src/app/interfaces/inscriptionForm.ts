export class InscriptionForm {
  constructor(
    public civilite: string,
    public nom: string,
    public prenom: string,
    public adresse: string,
    public ville: string,
    public code_postal: string,
    public telephone: string,
    public pays: string,
    public login: string,
    public email: string,
    public motdepasse: string,
    public mdp_conf: string,
    public valid: boolean
  ) {  }
}
