import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
} from 'axios';
import * as HttpStatusCode from 'http-status-codes';
import * as storage from 'store';

export interface ResponseError {
  error?: any;
  message: string;
  statusCode?: number;
}

export interface ErrorResponse {
  error: ResponseError;
}

export type ApiResponse = AxiosResponse & ErrorResponse;

const setApi = (): AxiosInstance => {
  const ApiHandler = axios.create({
    baseURL: 'http://localhost:3030',
    withCredentials: false,
    headers: { 'Content-Type': 'application/json' },
  });

  ApiHandler.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig => {
      const headers = config.headers;
      const bearer = storage.get('bearer');

      if (!!bearer) {
        config.headers = {
          ...headers,
          Authorization: `bearer ${bearer}`,
        };
      }
      return config;
    },
    (err: AxiosError): ErrorResponse => {
      Promise.reject(err);
      return { error: { message: 'Something went wrong' } };
    }
  );

  ApiHandler.interceptors.response.use(
    (res: AxiosResponse): AxiosResponse => res,
    (err: AxiosError): ErrorResponse => {
      let error: ResponseError;

      if (err.response) {
        error = err.response.data;
      } else if (err.request) {
        error = {
          message: 'Network error',
          statusCode: HttpStatusCode.SERVICE_UNAVAILABLE,
        };
      } else {
        error = { message: 'Something went wrong' };
      }
      Promise.reject(error);
      return { error };
    }
  );

  return ApiHandler;
};

const API = setApi();

export default API;
