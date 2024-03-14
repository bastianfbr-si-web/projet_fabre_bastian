export class Carte {
  constructor(
    public id: number,
    public nom: string,
    public code: string,
    public ccv: string,
    public expiration: string
  ) {}
}
