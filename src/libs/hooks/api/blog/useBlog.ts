import axios from 'axios';
import {BlogPayload} from 'types/index';
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const getBlogs = async () => {
  return await axios.get(BASE_URL+ 'api/blog',{
    headers: {
      'content-Type': 'application/json',
    },
  });
};

export const addBlog = async (payload: BlogPayload) => {
  console.log(payload)
  return await axios.post('http://localhost:4000/' + 'api/blog', payload,{
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};




