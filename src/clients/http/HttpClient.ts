import axios, { AxiosResponse } from 'axios';
import { HttpRequest, HttpResponse, IHttpClient } from './IHttpClient';

export class HttpClient implements IHttpClient {

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params,
      });
    } catch (error) {
      throw error;
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
