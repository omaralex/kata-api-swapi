import { IPersonRepository } from '../repositories/IPersonRepository';
import { PersonRequestDto } from './models/person/dto/personRequestDto';
import { PersonResponseDto } from './models/person/dto/personResponseDto';
import { Person } from '../repositories/models/person';
import { v4 as uuidv4 } from 'uuid';

export class PersonService {
  private personRepository: IPersonRepository;

  constructor(personRepository: IPersonRepository) {
    this.personRepository = personRepository;
  }

  async create(personRequestDto: PersonRequestDto): Promise<PersonResponseDto> {
    const id = uuidv4();
    const creationDate = new Date().getUTCDate().toString();

    const person: Person = {
      id,
      creationDate,
      name: personRequestDto.nombre,
      birthDate: personRequestDto.fechaNacimiento,
      eyeColor: personRequestDto.colorOjos,
      gender: personRequestDto.genero,
      hairColor: personRequestDto.colorCabello,
      height: personRequestDto.estatura,
      mass: personRequestDto.peso,
      skinColor: personRequestDto.colorPiel,
      homeworld: personRequestDto.planetaNatal,
      films: personRequestDto.peliculas,
      species: personRequestDto.especies,
      starships: personRequestDto.navesEstelares,
      vehicles: personRequestDto.vehiculos,
      url: personRequestDto.url
    }

    const result = await this.personRepository.create(person);

    const personResponseDto: PersonResponseDto = {
      ...personRequestDto,
      fechaCreacion: result.creationDate,
    }

    return personResponseDto;

  }

  async getAll(): Promise<PersonResponseDto[]> {
    const results = await this.personRepository.getAll();

    const personsResponseDto = results.map((item) => ({
      nombre: item.name,
      fechaNacimiento: item.birthDate,
      colorOjos: item.eyeColor,
      genero: item.gender,
      colorCabello: item.hairColor,
      estatura: item.height,
      peso: item.mass,
      colorPiel: item.skinColor,
      planetaNatal: item.homeworld,
      peliculas: item.films,
      especies: item.species,
      navesEstelares: item.starships,
      vehiculos: item.vehicles,
      url: item.url,
      fechaCreacion: item.creationDate,
    }))

    return personsResponseDto;

  }

}