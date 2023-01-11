import {configureStore} from '@reduxjs/toolkit'
import {adminsAPI} from './app/services/APISlice'

export const store=configureStore({
    reducer:{
        [adminsAPI.reducerPath]:adminsAPI.reducer
    },
    middleware:(gDM)=>gDM().concat(adminsAPI.middleware)
})