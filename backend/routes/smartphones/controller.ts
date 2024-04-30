import smartphonesService from './services';
import { Request, Response } from 'express';

function getAll(req: Request, res: Response) {
    const { prixMin, prixMax, nom, marque } = req.query as { prixMin: string, prixMax: string, nom: string, marque: string };
    const smartphones = smartphonesService.getAll(prixMin, prixMax, nom, marque);
    res.send(smartphones);
}

export default { getAll };