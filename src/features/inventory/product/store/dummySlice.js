import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProductsData = createAsyncThunk(
    'supplier/getProductData', async () => {
        const response = axios.get(
            "http://127.0.0.1:8000/supplier/"
        );
        const data = await (await response).data
        return data
    })


const productsAdapter = createEntityAdapter({})



export const productsSlice = createSlice({
    name: 'products',
    initialState: productsAdapter.getInitialState({}),
    reducers: {

    },
    extraReducers: {
        [getProductsData.fulfilled]: productsAdapter.setAll,


    }
})

export default productsSlice.reducer