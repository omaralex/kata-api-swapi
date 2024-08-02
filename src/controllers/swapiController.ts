import { Request, Response, NextFunction } from 'express';
import { HttpClient } from '../clients/http/HttpClient';
import { SwapiService } from '../services/swapiService';

const httpClient = new HttpClient();
const swapiService = new SwapiService(httpClient);

export const getPeople = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = req.params.id;
        const result = await swapiService.getPeopleById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error creating person', error: error.message });
    }
};