import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {PostType} from '../../types/post.type'
import {ProductType} from '../../types/product.type'
import {AddPostRequest} from './request/addPost.request'
import {ProductResponse} from './types/productResponse.type'

export const productApi = createApi({
  reducerPath: 'product',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecom-api.idealapps.dev/api',
  }),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getProducts: build.query<ProductResponse, {page: number; limit: number}>({
      query: ({page, limit}) => ({
        url: '/products',
        params: {
          page,
          limit,
        },
      }),
      transformResponse: (res: any) => res.data,
      providesTags: ['Product'],
    }),

    getPost: build.query<PostType, string>({
      query: (_id) => ({
        url: `/posts/${_id}`,
      }),
      transformResponse: (res: any) => res.data,
    }),

    addProduct: build.mutation<ProductType, AddPostRequest>({
      query: (product) => ({
        url: 'products',
        method: 'POST',
        body: product,
      }),
      transformResponse: (res: any) => res.data,
      invalidatesTags: ['Product'],
    }),

    removeProduct: build.mutation<ProductType, void>({
      query: () => ({
        url: 'products',
        method: 'DELETE',
      }),
      transformResponse: (res: any) => res.data,
      invalidatesTags: ['Product'],
    }),
  }),
})
