
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import moment from 'moment'
// import { Stats } from '../../hooks/useStats'
import getBaseURL from '../../utils/getBaseURL'
// import { updateDataController } from '../../utils/updateDataController'
import { getUserToken } from '../../utils/userAuthToken'

export const adminsAPI = createApi({
    reducerPath: 'adminsAPI',
    
    baseQuery: fetchBaseQuery({
        // baseUrl: getBaseURL('localhost'),
        baseUrl: 'https://jsonplaceholder.typicode.com/',

        prepareHeaders: (headers) => {
            // headers.set('Content-Type', 'application/json')
            headers.set('Authorization', `Bearer ${getUserToken()}`)
            return headers
        },
    }),

    tagTypes: [
        'Admin',
        'Visits',
        'Messages',
        'Patient',
        'Patients',
        'Procedures',
        'Schedules',
        'Appointments',
        'Questions',
        'Stats',
        'UpdatedOrders',
    ],

    endpoints: (builder) => ({
        getAdmin: builder.query<any, void>({
            query: () => '/self',
            transformResponse: (data: any) => {
                let response = data
                response.team.data.locations = response.team.data.locations.map(
                    (location:any) => ({
                        ...location,
                        address: {
                            ...location.address,
                            line2: location.address.line2 ?? '',
                        },
                    })
                )
                console.log("hello there testing/checking");
                return response
            },
            providesTags: ['Admin'],
        }),

        createTeam: builder.mutation<any, { name: string; token: string }>({
            query: (teamDetails) => ({
                url: '/teams',
                method: 'POST',
                body: {
                    ...teamDetails,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),

        addLocation: builder.mutation<any, any>({
            query: (location) => ({
                url: '/teams',
                method: 'PATCH',
                body: {
                    location,
                },
            }),
            transformResponse: (data: any) => {
                let response = data
                response.data.locations = response.data.locations.map(
                    (location:any) => ({
                        ...location,
                        address: {
                            ...location.address,
                            line2: location.address.line2 ?? '',
                        },
                    })
                )

                return response
            },
        }),

        editLocation: builder.mutation<any, any>({
            query: (location) => ({
                url: '/teams',
                method: 'PATCH',
                body: {
                    location,
                },
            }),
            transformResponse: (data: any) => {
                let response = data
                response.data.locations = response.data.locations.map(
                    (location:any) => ({
                        ...location,
                        address: {
                            ...location.address,
                            line2: location.address.line2 ?? '',
                        },
                    })
                )

                return response
            },
        }),

        deleteLocation: builder.mutation<{ success: true }, any>({
            query: (location) => ({
                method: 'DELETE',
                url: '/teams',
                body: {
                    ...location,
                },
            }),
        }),


        getUsers: builder.query<any, void>({
            query: () => '/users',
            // transformResponse: (data: any) => {
            //     let response = data
            //     response.team.data.locations = response.team.data.locations.map(
            //         (location:any) => ({
            //             ...location,
            //             address: {
            //                 ...location.address,
            //                 line2: location.address.line2 ?? '',
            //             },
            //         })
            //     )
            //     console.log("hello there testing/checking");
            //     return response
            // },
            providesTags: ['Admin'],
        }),

    }),
})

export const {
    useGetAdminQuery,
    useCreateTeamMutation,

    useAddLocationMutation,
    useEditLocationMutation,
    useDeleteLocationMutation,
    useGetUsersQuery
 
} = adminsAPI
