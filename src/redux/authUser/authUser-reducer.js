import { createSlice } from '@reduxjs/toolkit';
import * as authUserOperations from './authUser-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authUserSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [authUserOperations.createUser.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authUserOperations.loginUser.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [authUserOperations.logoutUser.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [authUserOperations.getCurrentUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
        },
    },
});

export default authUserSlice.reducer;