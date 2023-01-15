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
        'LatestNews','AllNews'
    ],

    endpoints: (builder) => ({
       
        getNews: builder.query<unknown, void>({
            query: () => '/news',
            transformResponse: (data: unknown) => {
                const response = data;
                return response;
            },
            providesTags: ['AllNews'],
        }),

        getLatestNews: builder.query<unknown, void>({
            query: () => '/news/latestNews',
            transformResponse: (data: unknown) => {
                const response:unknown = data;
                return response;
            },
            providesTags: ['LatestNews'],
        }),

        getFilterNews: builder.mutation<unknown, void>({
            query: (query) => ({
                url: '/news/filterNews',
                method: 'POST',
                body: {
                    query
                },
            }),
            transformResponse: (data: any) => {
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
    useGetNewsQuery,
    useGetLatestNewsQuery,
    useGetFilterNewsMutation,
    useCreateUserMutation,
    useSigninUserMutation
 
} = adminsAPI;
