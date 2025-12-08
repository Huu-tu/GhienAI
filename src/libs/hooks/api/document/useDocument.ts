import { fetcher, HTTPMethod } from 'config/api'
import { QUERY_KEY } from 'config/constants'
import {  useMutation, useQuery } from '@tanstack/react-query'
import { UploadFilePayload, Document } from 'types/index'

const baseUrl = 'document/';
const url = {
  getDocuments: baseUrl + 'get-documents',
  uploadDocument: baseUrl + 'upload-document',
};

const useGetDocuments = () =>{
  return useQuery({
    queryKey: [QUERY_KEY.GET_DOCUMENTS],
    queryFn: () =>{
      return fetcher<Document[]>({
        method: HTTPMethod.GET,
        url: url.getDocuments
      })
    }
  })
}

const useUploadDocument = () =>{
  return useMutation({
    mutationFn: (body: UploadFilePayload)=>{
      return fetcher({
        method: HTTPMethod.POST,
        url: url.uploadDocument,
        data: body,

      })
    },
    onSuccess: () => {
    },
  })
}

export { useGetDocuments, useUploadDocument };