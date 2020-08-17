import { combineReducers } from '@reduxjs/toolkit'
import suppliers from '../supplier/store'
import products from '../product/store'
import categories from '../category/store'

const reducer = combineReducers({
    suppliers,
    products,
    categories
    
})

export default reducer