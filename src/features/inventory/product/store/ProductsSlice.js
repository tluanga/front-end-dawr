import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {getProducts,getProduct} from '../../../../api/product.api'




export const getProductsData = createAsyncThunk(
    'products/getProductsData', async () => getProducts()
)

export const saveProduct = createAsyncThunk('products/saveProduct',
    async product => {
        const response = await axios.post('http://localhost:8000/product/')
        const data = await response.data
        return data
    }
)

const productsAdapter = createEntityAdapter({})

export const {
    selectAll:selectProducts
}=productsAdapter.getSelectors(state=>state.inventory.products.products)


export const productsSlice = createSlice({
    name: 'products',
    initialState: productsAdapter.getInitialState({}),
    reducers: {
        newProduct:(state,action)=>action.payload
    },
    extraReducers: {
        [getProductsData.fulfilled]: productsAdapter.setAll,
        [saveProduct.fulfilled]:productsAdapter.addOne  
    }
    
})
export const {newProduct} =productsSlice.actions

export default productsSlice.reducer
// export default productsSlice.reducer




// export const getProductsData = createAsyncThunk(
//     'supplier/getProductData', async () => {
//         const response = axios.get(
//             "http://127.0.0.1:8000/product/"
//         );
//         const data = await (await response).data
//         return data
//     })


// const productsAdapter = createEntityAdapter({})



// export const productsSlice = createSlice({
//     name: 'products',
//     initialState: productsAdapter.getInitialState({}),
//     reducers: {
        
//     },
//     extraReducers: {
//         [getProductsData.fulfilled]: productsAdapter.setAll,

        
//     }
// })

// export default productsSlice.reducer