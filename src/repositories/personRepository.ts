import { IPersonRepository } from './IPersonRepository';
import { Person } from './models/person';
import dataBase from '../clients/database';

export class PersonRepository implements IPersonRepository {
  async create(person: Person): Promise<{ id: string, creationDate: string }> {
    const database = dataBase.getInstance();
    const result = await database.insert(person);

    return {
      id: result.id,
      creationDate: result.creationDate
    };
  }

  async getAll(): Promise<Person[]> {
    const database = dataBase.getInstance();

    const results = await database.getAll();

    const persons = results as Person[];
    return persons;

  }
}
