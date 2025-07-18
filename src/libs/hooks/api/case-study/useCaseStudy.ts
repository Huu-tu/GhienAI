import {  CaseStudyPost, CaseStudyPayload } from 'types/index'
import { fetcher, HTTPMethod } from 'config/api'
import { QUERY_KEY } from 'config/constants'
import { useQuery, useMutation } from '@tanstack/react-query'

const baseUrl = 'case-study/';
const url = {
  getCases: baseUrl + 'get-cases',
  viewCase: baseUrl + 'view-case/',
  addCase: baseUrl + 'add-case',
};

const useGetCase = () => {
  return useQuery({
    queryKey: [QUERY_KEY.GET_CASES],
    queryFn: () => {
      return fetcher<CaseStudyPost[]>({
        method: HTTPMethod.GET,
        url: url.getCases
      })
    },
  })
}

const useViewCase = (_id: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.VIEW_CASE],
    queryFn: () => {
      return fetcher<CaseStudyPost>({
        method: HTTPMethod.GET,
        url: url.viewCase + _id
      })
    },
  })
}


const useCreateCase = () =>{
  return useMutation({
    mutationFn: (body: CaseStudyPayload)=>{
      return fetcher({
        method: HTTPMethod.POST,
        url: url.addCase,
        data: body,
      })
    },
    onSuccess: () => {
    },
  })
}

export {  useGetCase, useCreateCase, useViewCase };