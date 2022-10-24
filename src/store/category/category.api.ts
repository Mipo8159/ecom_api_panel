import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {CategoryType} from '../../types/category.type'
import {AddCategoryRequest} from './request/addCategory.request'

export const categoryApi = createApi({
  reducerPath: 'category',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecom-api.idealapps.dev/api',
  }),
  tagTypes: ['Category'],
  endpoints: (build) => ({
    getCategories: build.query<CategoryType[], void>({
      query: () => ({
        url: '/categories',
      }),
      providesTags: ['Category'],
      transformResponse: (res: any) => res.data.categories,
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

    removeCategory: build.mutation<boolean, string>({
      query: (_id) => ({
        url: `/categories/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
  }),
})

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
  useRemoveCategoryMutation,
} = categoryApi
