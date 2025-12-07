import { fetcher, HTTPMethod } from 'config/api'
import {  useMutation } from '@tanstack/react-query'
import { UploadFilePayload } from 'types/index'

const baseUrl = 'document/';
const url = {
  uploadDocument: baseUrl + 'upload-document',
};

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

export { useUploadDocument };