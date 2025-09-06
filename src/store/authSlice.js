import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { userData: null, status: false },
    reducers: {
        login: (state, action) => {
            state.userData = action.payload.userData
            state.status = true
        },
        logOut: (state) => {
            state.status = false
            state.userData = null
        }
    }
})

export const { login, logOut } = authSlice.actions

export default authSlice.reducer