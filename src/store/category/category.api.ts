import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {CategoryType} from '../../types/category.type'
import {AddCategoryRequest} from './request/addCategory.request'
import {CategoryResponse} from './types/categoryResponse.type'

export const categoryApi = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
  }),
  tagTypes: ['Category'],
  endpoints: (build) => ({
    getCategories: build.query<CategoryResponse, void>({
      query: () => ({
        url: '/categories',
      }),
      providesTags: ['Category'],
      transformResponse: (res: any) => res.data,
    }),

    addCategory: build.mutation<CategoryType, AddCategoryRequest>({
      query: (category) => ({
        url: '/categories',
        method: 'POST',
        body: category,
      }),
      invalidatesTags: ['Category'],
      transformResponse: (res: any) => res.data,
    }),
  }),
})

export const {useAddCategoryMutation, useGetCategoriesQuery} = categoryApi
