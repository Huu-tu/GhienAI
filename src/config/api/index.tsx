import axios from 'axios';

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


const fetcher = axios.create({
  baseURL:  `${import.meta.env.VITE_BASE_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default fetcher;
