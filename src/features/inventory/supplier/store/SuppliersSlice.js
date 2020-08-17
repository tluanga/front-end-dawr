import { createSlice,createAsyncThunk,createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

//get all supplier data
export const getSuppliersData = createAsyncThunk(
    'supplier/getSupplierData', async () => {
        const response = axios.get(
          "http://127.0.0.1:8000/supplier/"
        );
        const data = await (await response).data
        return data
})
    
//Get single supplier data by passing the id of the supplier
export const getSupplierData = createAsyncThunk(
    'supplier/getSupplierData', async (id) => {
        const response = axios.get(
            'http://127.0.0.1:8000/supplier/'+id
        )
        const data = await (await response).data
        return data
   } 
)

const suppliersAdapter = createEntityAdapter({})


export const {
    selectAll: selectSuppliers,
    selectById:selectSupplierbyId}
    = suppliersAdapter.getSelectors(
    state => state.suppliers
    )



export const saveSupplier = createAsyncThunk('supplier/saveSupplier',
    async supplier => {
        const response = await axios.post('http://127.0.0.1:8000/supplier/', supplier)
        const data = await response.data
        return data
    }
)


export const suppliersSlice = createSlice({
    name: 'suppliers',
    initialState:suppliersAdapter.getInitialState({}),
    reducers: {
        newSupplier:(state,action)=>action.payload
    },
    extraReducers: {
        [getSuppliersData.fulfilled]: suppliersAdapter.setAll,
        
        [saveSupplier.fulfilled]:suppliersAdapter.addOne
    }
})

export const { newSupplier } = suppliersSlice.actions

export default suppliersSlice.reducer
