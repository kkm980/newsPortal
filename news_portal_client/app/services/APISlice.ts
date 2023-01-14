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
        // getAdmin: builder.query<unknown, void>({
        //     query: () => '/self',
        //     transformResponse: (data: unknown) => {
        //         const response = data;
        //         response.team.data.locations = response.team.data.locations.map(
        //             (location:any) => ({
        //                 ...location,
        //                 address: {
        //                     ...location.address,
        //                     line2: location.address.line2 ?? '',
        //                 },
        //             })
        //         )
        //         console.log("hello there testing/checking");
        //         return response
        //     },
        //     providesTags: ['Admin'],
        // }),

        // createTeam: builder.mutation<any, { name: string; token: string }>({
        //     query: (teamDetails) => ({
        //         url: '/teams',
        //         method: 'POST',
        //         body: {
        //             ...teamDetails,
        //         },
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     }),
        // }),

        // addLocation: builder.mutation<any, any>({
        //     query: (location) => ({
        //         url: '/teams',
        //         method: 'PATCH',
        //         body: {
        //             location,
        //         },
        //     }),
        //     transformResponse: (data: any) => {
        //         let response = data
        //         response.data.locations = response.data.locations.map(
        //             (location:any) => ({
        //                 ...location,
        //                 address: {
        //                     ...location.address,
        //                     line2: location.address.line2 ?? '',
        //                 },
        //             })
        //         )

        //         return response
        //     },
        // }),

        // editLocation: builder.mutation<any, any>({
        //     query: (location) => ({
        //         url: '/teams',
        //         method: 'PATCH',
        //         body: {
        //             location,
        //         },
        //     }),
        //     transformResponse: (data: any) => {
        //         let response = data
        //         response.data.locations = response.data.locations.map(
        //             (location:any) => ({
        //                 ...location,
        //                 address: {
        //                     ...location.address,
        //                     line2: location.address.line2 ?? '',
        //                 },
        //             })
        //         )

        //         return response
        //     },
        // }),

        // deleteLocation: builder.mutation<{ success: true }, any>({
        //     query: (location) => ({
        //         method: 'DELETE',
        //         url: '/teams',
        //         body: {
        //             ...location,
        //         },
        //     }),
        // }),


        getNews: builder.query<unknown, void>({
            query: () => '/news',
            transformResponse: (data: unknown) => {
                const response = data;
                // response.team.data.locations = response.team.data.locations.map(
                //     (location:any) => ({
                //         ...location,
                //         address: {
                //             ...location.address,
                //             line2: location.address.line2 ?? '',
                //         },
                //     })
                // )
                return response;
            },
            providesTags: ['AllNews'],
        }),

        getLatestNews: builder.query<unknown, void>({
            query: () => '/news/latestNews',
            // query: () => '/',
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
    // useGetAdminQuery,
    // useCreateTeamMutation,

    // useAddLocationMutation,
    // useEditLocationMutation,
    // useDeleteLocationMutation,
    useGetNewsQuery,
    useGetLatestNewsQuery,
    useGetFilterNewsMutation,
    useCreateUserMutation,
    useSigninUserMutation
 
} = adminsAPI;
