import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'


export const getProductsData = createAsyncThunk(
    'supplier/getProductData', async () => {
        const response = axios.get(
            "http://127.0.0.1:8000/supplier/"
        );
        const data = await (await response).data
        return data
})

// //Get single supplier data by passing the id of the supplier
// export const getProductData = createAsyncThunk(
//     'supplier/getProductData', async (id) => {
//         const response = axios.get(
//             'http://127.0.0.1:8000/supplier/' + id
//         )
//         const data = await (await response).data
//         return data
//     }
// )

const productsAdapter = createEntityAdapter({})


// export const {
//     selectAll: selectProducts,
//     selectById: selectProductbyId }
//     = productsAdapter.getSelectors(
//         state => state.products
//     )



// export const saveProduct = createAsyncThunk('supplier/saveProduct',
//     async supplier => {
//         const response = await axios.post('http://127.0.0.1:8000/supplier/', supplier)
//         const data = await response.data
//         return data
//     }
// )


export const productsSlice = createSlice({
    name: 'products',
    initialState: productsAdapter.getInitialState({}),
    reducers: {
        // newProduct: (state, action) => action.payload
    },
    extraReducers: {
        [getProductsData.fulfilled]: productsAdapter.setAll,

        // [saveProduct.fulfilled]: productsAdapter.addOne
    }
})

// export const { newProduct } = productsSlice.actions

export default productsSlice.reducer
