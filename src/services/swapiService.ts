import { IHttpClient } from '../clients/http/IHttpClient'
import { PeopleTranslationResponseDto } from './models/swapi/PeopleTranslationResponseDto';

export class SwapiService {
  private httpClient: IHttpClient;

  constructor(httpClient: IHttpClient) {
    this.httpClient = httpClient;
  }

  async getPeopleById(id: string): Promise<PeopleTranslationResponseDto> {
    try {
      const { body } = await this.httpClient.request({
        url: `https://swapi.py4e.com/api/people/${id}/`,
        method: 'get'
      });

      const response = {
        nombre: body.name,
        fechaNacimiento: body.birth_date,
        colorOjos: body.eye_color,
        genero: body.gender,
        colorCabello: body.hair_color,
        estatura: body.height,
        peso: body.mass,
        colorPiel: body.skin_color,
        planetaNatal: body.homeworld,
        peliculas: body.films,
        especies: body.species,
        navesEstelares: body.starships,
        vehiculos: body.vehicles,
        url: body.url,
        fechaCreacion: body.created,
        fechaEdicion: body.edited
      };
      return response;
    } catch (error) {
      throw new Error(error?.response?.data || error?.request?.responseText || error?.message);
    }

  }

}