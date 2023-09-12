import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65003d2918c34dee0cd490c8.mockapi.io/api',
  }),
  tagTypes: ['Cars'],
  endpoints: builder => ({
    getCars: builder.query({
      query: () => `/advert`,
      providesTags: ['Cars'],
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
