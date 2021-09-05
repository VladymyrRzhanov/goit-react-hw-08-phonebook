import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userApi from "services/userApi";
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}
export const getCurrentUser = createAsyncThunk('authUser/getCurrentUser',
    async (_, thunkAPI) => {
        const state = await thunkAPI.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkAPI.rejectWithValue()
        }
        token.set(persistedToken)
        try {
            const data = await userApi.getCurrentUser();
            return data;
        } catch (error) {
            
        }

        // return data;
    });


// export const createUser = createAsyncThunk('auth/register', async credentials => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     // token.set(data.token);
//     return data;
//   } catch (error) {
//     // TODO: Добавить обработку ошибки error.message
//   }
// });

export const createUser = createAsyncThunk('authUser/createNewUser',
    async (regDetails) => {
        try {
            const data = await userApi.createNewUser(regDetails);
            token.set(data.token);
            return data;
        } catch (error) {
            
        }
    });

export const loginUser = createAsyncThunk('authUser/loginUser',
    async (loginDetails) => {
        try {
            const data = await userApi.loginUser(loginDetails);
            token.set(data.token);
            return data;
        } catch (error) {
            
        }
    });

export const logoutUser = createAsyncThunk('authUser/logoutUser',
    async () => {
        try {
            await userApi.logoutUser();
            token.unset()
        } catch (error) {
            
        }
    });