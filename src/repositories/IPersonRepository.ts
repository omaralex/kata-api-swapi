import { Person } from './models/person'

export interface IPersonRepository {
    create(person: Person): Promise<{ id: string, creationDate: string }>;
    getAll(): Promise<Person[]>;
}