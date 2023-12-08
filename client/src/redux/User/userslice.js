import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state)=> {
            state.loading = true;
        },
        loginSuccess: (state,action)=> {
            state.user = action.payload;
            state.error = null;
            state.loading = false;
        },
        loginFailure: (state,action)=> {
            state.error = action.payload;
            state.loading = false;
        },
        signUpStart: (state)=> {
            state.loading = true;
        },
        signUpSuccess: (state,action)=> {
            state.user = action.payload;
            state.error = null;
            state.loading = false;
        },
        signUpFailure: (state,action)=> {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {loginFailure,loginStart,loginSuccess,signUpFailure,signUpSuccess,signUpStart} = userSlice.actions;

export default userSlice.reducer;