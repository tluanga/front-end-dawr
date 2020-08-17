import { createSlice, createEntityAdapter, createAsyncThunk } from '@reduxjs/toolkit'
import {getCategories,putCategory} from '../../../../api/category.api'

export const fetchCategories=createAsyncThunk('categories/fetchCategories',
    async()=>await getCategories()
)
export const saveCategory = createAsyncThunk('products/saveProduct',
    async payload =>  await putCategory(payload)
)

const categoriesAdapter = createEntityAdapter({})

export const {
    selectAll:selectCategories,selectById:selectCategoryById
}=categoriesAdapter.getSelectors(state=>state.inventory.categories.categories)


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: categoriesAdapter.getInitialState({}),
    reducers: {
        newProduct: (state, action) => action.payload,
       
        
    },
    extraReducers: {
        [fetchCategories.fulfilled]:categoriesAdapter.setAll,        
        [saveCategory.fulfilled]:categoriesAdapter.addOne,  
    }
    
})
export const {newProduct} =categoriesSlice.actions

export default categoriesSlice.reducer
