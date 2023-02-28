import Config from 'react-native-config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NasaApodElement } from '@interfaces/nasa';

export const nasaApi = createApi({
  reducerPath: 'asan',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.NASA_BASE_URL
  }),
  endpoints: builder => ({
    getApodItems: builder.query<NasaApodElement[], undefined>({
      query: () => {
        return {
          url: '/planetary/apod',
          params: {
            api_key: Config.NASA_API_KEY,
            count: 10
          }
        };
      },
      transformResponse: (epReturnValue: NasaApodElement[]) =>
        epReturnValue.map((item, index) => ({ ...item, id: `${item.date}_${index}` }))
    })
  })
});

export const { useGetApodItemsQuery } = nasaApi;
