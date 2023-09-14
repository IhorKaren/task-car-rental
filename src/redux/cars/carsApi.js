import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65003d2918c34dee0cd490c8.mockapi.io/api/',
  }),
  tagTypes: ['Cars', 'Favorites', 'Favorite'],
  endpoints: builder => ({
    getCars: builder.query({
      query: ({ page, limit }) => `advert/?p=${page}&l=${limit}`,
      providesTags: ['Cars'],
    }),
    getCarsByBrand: builder.query({
      query: ({ page, limit, brand }) =>
        `advert/?make=${brand}&p=${page}&l=${limit}`,
      providesTags: ['Cars'],
    }),
    getAllFavorites: builder.query({
      query: () => `favorites`,
      providesTags: ['Favorites'],
    }),
    getFavorites: builder.query({
      query: ({ page, limit }) => `favorites/?p=${page}&l=${limit}`,
      providesTags: ['Favorite'],
    }),
    addToFavorites: builder.mutation({
      query: data => ({
        url: `favorites`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Favorites', 'Favorite'],
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
  useGetCarsByBrandQuery,
  useGetAllFavoritesQuery,
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = carsApi;
