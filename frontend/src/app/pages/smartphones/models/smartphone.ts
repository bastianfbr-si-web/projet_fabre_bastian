export class Smartphone {
  id: number;
  nom: string;
  prix: number;
  marque: string;
  description: string;
  image: string;
  constructor(id: number, nom: string, prix: number, marque: string, description: string, image: string) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.marque = marque;
    this.description = description;
    this.image = image;
  }
}
