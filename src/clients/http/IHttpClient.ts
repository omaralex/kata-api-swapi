/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpRequest = {
    url: string;
    method: HttpMethod;
    body?: unknown;
    headers?: Record<string, string | number | boolean>;
    params?: any;
  };
  
  export interface IHttpClient<R = any> {
    request: (data: HttpRequest) => Promise<HttpResponse<R>>;    
  }
  
  export type HttpMethod = 'post' | 'get' | 'put';
  
  export enum HttpStatusCode {
    ok = 200,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    serverError = 500,
  }
  
  export type HttpResponse<T = any> = {
    statusCode: HttpStatusCode;
    body?: T;
  };
  