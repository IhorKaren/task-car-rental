import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65003d2918c34dee0cd490c8.mockapi.io/api/',
  }),
  tagTypes: ['Cars', 'Favorites'],
  endpoints: builder => ({
    getCars: builder.query({
      query: ({ page, limit }) => `advert/?p=${page}&l=${limit}`,
      providesTags: ['Cars'],
    }),
    getFavorites: builder.query({
      query: () => `favorites`,
      providesTags: ['Favorites'],
    }),
    addToFavorites: builder.mutation({
      query: data => ({
        url: `favorites`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Favorites'],
    }),
    removeFromFavorites: builder.mutation({
      query: id => ({
        url: `favorites/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Favorites'],
    }),
  }),
});

export const {
  useGetCarsQuery,
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = carsApi;
