import axios from 'axios';

import type { AxiosError, AxiosHeaderValue, AxiosRequestConfig, AxiosResponse } from 'axios';
import { NETWORK_CONFIG } from 'config/constants';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  OPTION = 'OPTION',
  TRACE = 'TRACE',
  CONNECT = 'CONNECT',
}

type ConfigOptions = {
  token?: string;
  withToken?: boolean;
  withMetadata?: boolean;
  hiddenError?: boolean;
  isFormData?: boolean;
  headerValueType?: AxiosHeaderValue;
};

// const fetcher = axios.create({
//   baseURL:  `${import.meta.env.VITE_BASE_API_URL}/api`,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

export const fetcher =  <T>(
  config: AxiosRequestConfig & {
  method: HTTPMethod;
},
  options?: ConfigOptions,
) => {
  return new Promise<T>((resolve, reject) => {
    axios
      .create({
        baseURL: `${import.meta.env.VITE_BASE_API_URL}/api`,
        headers: {
          Accept: options?.headerValueType ?? (options?.isFormData ? 'multipart/form-data' : 'application/json'),
        },
        timeout: NETWORK_CONFIG.TIMEOUT,
        withCredentials: NETWORK_CONFIG.WITH_CREDENTIALS,
      })
      .request<T | undefined, AxiosResponse<T>>(config)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          resolve(response.data);
        }
      })
      .catch((error: AxiosError) => {
        reject(error);
      });
  });
};

export default fetcher;
