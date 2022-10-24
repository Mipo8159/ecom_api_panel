import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import {PostType} from '../../types/post.type'
import {AddPostRequest} from './request/addPost.request'

export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ecom-api.idealapps.dev/api',
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getPosts: build.query<PostType[], void>({
      query: () => ({
        url: '/posts',
      }),
      providesTags: ['Post'],
      transformResponse: (res: any) => res.data.posts,
    }),

    getPost: build.query<PostType, string>({
      query: (_id) => ({
        url: `/posts/${_id}`,
      }),
      providesTags: ['Post'],
    }),

    addPost: build.mutation<PostType, AddPostRequest>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),

    removePost: build.mutation<PostType, string>({
      query: (_id) => ({
        url: `/posts/${_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useRemovePostMutation,
} = postApi
