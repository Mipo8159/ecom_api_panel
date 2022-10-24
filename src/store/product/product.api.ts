import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {PostType} from '../../types/post.type'
import {ProductType} from '../../types/product.type'
import {AddProductRequest} from './request/addProduct.request'
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
      transformResponse: (res: any) => res.data.products,
      providesTags: ['Product'],
    }),

    getProduct: build.query<ProductType, string>({
      query: (_id) => ({
        url: `/products/${_id}`,
      }),
      transformResponse: (res: any) => res.data,
    }),

    addProduct: build.mutation<ProductType, AddProductRequest>({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
      transformResponse: (res: any) => res.data,
      invalidatesTags: ['Product'],
    }),

    removeProduct: build.mutation<ProductType, string>({
      query: (_id) => ({
        url: `/products/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
  }),
})

export const {
  useGetProductQuery,
  useGetProductsQuery,
  useAddProductMutation,
  useRemoveProductMutation,
} = productApi
