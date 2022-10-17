import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {FileResponse} from './types/fileResponse.type'

export const fileApi = createApi({
  reducerPath: 'files',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecom-api.idealapps.dev/api',
  }),
  endpoints: (build) => ({
    getFiles: build.query<FileResponse, number>({
      query: (page: number) => ({
        url: '/files',
        params: {
          page,
        },
      }),
      transformResponse: (res: any) => res.data,
    }),
  }),
})

export const {useGetFilesQuery} = fileApi
