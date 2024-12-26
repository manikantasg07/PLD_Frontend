import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./users/authSlice"


const store = configureStore({
    reducer:{
        user:authReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;