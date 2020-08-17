import { combineReducers } from '@reduxjs/toolkit'
import products from './ProductsSlice'

const reducers = combineReducers({
    products
})

export default reducers
