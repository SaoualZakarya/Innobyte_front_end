import axios from 'axios'
import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'

import {base_url} from '../utils/base_url'


export const login = createAsyncThunk('auth/login',async (user,thunkAPI)=>{
    try {
        const response = await axios.post( `${base_url}user/login` ,user)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(JSON.stringify(error))
    }
})




const initialState = {
    user:'',
    isError:false,
    isLoading:false, 
    isSuccess:false,
    message:""
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.isLoading = true 
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true 
            state.user = action.payload
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false 
            state.isError = true
            state.user = null
            state.message = action.error
        })
    }
})

export default authSlice.reducer