import axios from 'axios';

import { MethodEnum } from '../../../enums/methods.enum';

export type TMethodType = 'get' | 'post' | 'put' | 'patch' | 'delete';
export default class ConnectionAPI {
  static async call<T>(url: string, method: TMethodType, body?: unknown): Promise<T> {
    switch (method) {
      case MethodEnum.DELETE:
      case MethodEnum.GET:
        return (await axios[method]<T>(url)).data;
      case MethodEnum.POST:
      case MethodEnum.PUT:
      case MethodEnum.PATCH:
        return (await axios[method]<T>(url, body)).data;

      default:
        return (await axios[method]<T>(url)).data;
    }
  }

  static async connect<T>(url: string, method: TMethodType, body?: unknown): Promise<T> {
    return this.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
          case 403:
            throw new Error('No permission!');

          default:
            throw new Error('Without connection with backend!');
        }
      }
      throw new Error('Without connection with backend!');
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.GET);
};
export const connectionAPIDelete = async <T>(url: string): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.DELETE);
};
export const connectionAPIPost = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.POST, body);
};
export const connectionAPIPatch = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PATCH, body);
};
export const connectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
  return ConnectionAPI.connect(url, MethodEnum.PUT, body);
};
