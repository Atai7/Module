import {createSlice, createAsyncThunk}from '@reduxjs/toolkit';
import axios from '../../api/axios.input';

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (user, {rejectWithValue})=>{
        try {
            const res = await axios.post('/auth/local',user);
            if(!res.data){
                throw new Error()
            }
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    } 
)

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:{}
    },
    extraReducers:{
        [fetchLogin.pending]:(state)=>{
            state.loading='loading';
        },
    },
    extraReducers:{
        [fetchLogin.fulfilled]:(state , action)=>{
            state.loading='complete';
            state.user = {
                token:action.payload.jwt,
                ...action.payload.user
            }
        },
    },
    extraReducers:{
        [fetchLogin.rejected]:(state)=>{
            state.loading='error';
        },
    },
});

export default authSlice.reducer;