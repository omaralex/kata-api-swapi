import { Request, Response, NextFunction } from 'express';
import { PersonRequestDto } from '../services/models/person/dto/personRequestDto';
import { PersonRepository } from '../repositories/personRepository';
import { PersonService } from '../services/personService';

const personRepository = new PersonRepository();
const personService = new PersonService(personRepository);

export const createPerson = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const personRequestDto: PersonRequestDto = req.body;
        const personCreated = await personService.create(personRequestDto);
        res.status(201).json(personCreated);
    } catch (error) {
        res.status(500).json({ message: 'Error creating person', error: error.message });
    }
};

export const getAllPersons = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const personCreated = await personService.getAll();
        res.status(201).json(personCreated);
    } catch (error) {
        res.status(500).json({ message: 'Error getting persons', error: error.message });
    }
};