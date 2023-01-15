import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import moment from 'moment'
// import { Stats } from '../../hooks/useStats'
import getBaseURL from '../../utils/getBaseURL';
// import { updateDataController } from '../../utils/updateDataController'
import { getUserToken } from '../../utils/userAuthToken';

export const adminsAPI = createApi({
    reducerPath: 'adminsAPI',

    baseQuery: fetchBaseQuery({
        // baseUrl: getBaseURL('localhost'),
        baseUrl: 'http://localhost:8000',

        prepareHeaders: (headers) => {
            // headers.set('Content-Type', 'application/json')
            headers.set('Authorization', `Bearer ${getUserToken()}`);
            return headers;
        },
    }),

    tagTypes: [
        'LatestNews', 'AllNews'
    ],

    endpoints: (builder) => ({

        getNews: builder.mutation<unknown, any>({
            query: ({ page_num, page_size }) => ({
                url: '/news',
                method: 'POST',
                body: {
                    page_num,
                    page_size
                },
            }),
            transformResponse: (data: unknown) => {
                const response = data;
                return response;
            },
        }),

        getLatestNews: builder.query<unknown, void>({
            query: () => '/news/latestNews',
            transformResponse: (data: unknown) => {
                const response: unknown = data;
                return response;
            },
            providesTags: ['LatestNews'],
        }),

        getFilterNews: builder.mutation<unknown, any>({
            query: ({ search_text, page_num, page_size }) => ({
                url: '/news/filterNews',
                method: 'POST',
                body: {
                    search_text, page_num, page_size
                },
            }),
            transformResponse: (data: any) => {
                const response = data;
                return response;
            },
        }),

        getWeather: builder.query<unknown, void>({
            query: () => '/weather',
            transformResponse: (data: unknown) => {
                const response = data;
                return response;
            },
        }),

        createUser: builder.mutation<any, { email: string; password: string }>({
            query: (userDetails) => ({
                url: '/user/signup',
                method: 'POST',
                body: {
                    ...userDetails
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
        signinUser: builder.mutation<any, { email: string; password: string }>({
            query: (userDetails) => ({
                url: '/user/login',
                method: 'POST',
                body: {
                    ...userDetails,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),

    }),
});

export const {
    useGetNewsMutation,
    useGetLatestNewsQuery,
    useGetFilterNewsMutation,
    useGetWeatherQuery,
    useCreateUserMutation,
    useSigninUserMutation

} = adminsAPI;
