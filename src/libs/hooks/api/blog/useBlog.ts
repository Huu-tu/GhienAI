import { BlogPayload } from 'types/index'
import { fetcher, HTTPMethod } from 'config/api'
import { QUERY_KEY } from 'config/constants'
import { useQuery, useMutation } from '@tanstack/react-query'
import {BlogPost} from 'types/index';

const baseUrl = 'blog/';
const url = {
  getBlogs: baseUrl + 'get-blogs',
  viewBlog: baseUrl + 'view-blog/',
  addBlog: baseUrl + 'add-blog',
};


const useGetBlogs = () => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_BLOGS],
    queryFn: () => {
      return fetcher<BlogPost[]>({
        method: HTTPMethod.GET,
        url: url.getBlogs
      })
    },
  })
}

const useViewBlog = (_id: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.VIEW_BLOG],
    queryFn: () => {
      return fetcher<BlogPost>({
        method: HTTPMethod.GET,
        url: url.viewBlog + _id
      })
    },
  })
}


const useCreateBlog = () =>{
  return useMutation({
    mutationFn: (body: BlogPayload)=>{
      return fetcher({
        method: HTTPMethod.POST,
        url: url.addBlog,
        data: body,
      })
    },
    onSuccess: () => {
    },
  })
}

export {  useGetBlogs, useCreateBlog, useViewBlog };