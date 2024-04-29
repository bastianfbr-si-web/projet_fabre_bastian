import smartphonesService from './services';
import { Request, Response } from 'express';

function getAll(req: Request, res: Response) {
    const smartphones = smartphonesService.getAll();
    res.send(smartphones);
}

export default { getAll };