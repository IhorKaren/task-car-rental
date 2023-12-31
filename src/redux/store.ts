// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { carsApi } from './cars/carsApi';

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(carsApi.middleware),
});

export const persistor = store;

export type RootState = ReturnType<typeof store.getState>;
