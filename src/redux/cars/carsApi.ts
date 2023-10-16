import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Car } from 'components/App.types';

type SearchParams = { page: number; limit: number; brand?: string };

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65003d2918c34dee0cd490c8.mockapi.io/api/',
  }),
  tagTypes: ['Cars', 'Favorites'],
  endpoints: builder => ({
    getCars: builder.query<Car[], SearchParams>({
      query: ({ page, limit }) => `advert/?p=${page}&l=${limit}`,
      providesTags: ['Cars'],
    }),
    getCarsByBrand: builder.query<Car[], SearchParams>({
      query: ({ page, limit, brand }) =>
        `advert/?make=${brand}&p=${page}&l=${limit}`,
      providesTags: ['Cars'],
    }),
    getFavorites: builder.query<Car[], void>({
      query: () => `favorites`,
      providesTags: ['Favorites'],
    }),
    addToFavorites: builder.mutation<Car[], Car>({
      query: data => ({
        url: `favorites`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Favorites'],
    }),
    removeFromFavorites: builder.mutation<Car[], number>({
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
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = carsApi;
