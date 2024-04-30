import marquesService from './services';
import { Request, Response } from 'express';

function getAll(req: Request, res: Response) {
    const smartphones = marquesService.getAll();
    res.send(smartphones);
}

export default { getAll };