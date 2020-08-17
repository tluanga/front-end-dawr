import { createSlice, createEntityAdapter, createAsyncThunk,createReducer } from '@reduxjs/toolkit'
import {getCategory} from '../../../../api/category.api'



export const fetchCategory = createAsyncThunk(
    'category/getCategory',async id =>{
        const response=await getCategory({id})
        console.log(response)
        return response
    }) 

export const categoryAdapter=createEntityAdapter()

export const {
    selectAll:selectCategory,
    selectById: selectCategoryById
} = categoryAdapter.getSelectors(state => state.inventory.categories.category)


const selectedCategorySlice = createSlice({
    name: 'category',
    initialState:categoryAdapter.getInitialState(),
    reducers: {
        // selectedCategory:(state,action)=>state.push(action.payload)
    },
    extraReducers: {
        [fetchCategory.fulfilled]: categoryAdapter.addOne
        
        // [getCategoryData.fulfilled]: categoryAdapter.addOne
    }

})

export const { selectedCategory } = selectedCategorySlice.actions

export default selectedCategorySlice.reducer