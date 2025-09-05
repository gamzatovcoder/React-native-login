import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiTariff = createApi({
  reducerPath: 'apiTariff',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.coingecko.com/api/v3/coins/',
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => 'list',
    }),
  }),
});

export const { useGetProductsQuery } = apiTariff;
