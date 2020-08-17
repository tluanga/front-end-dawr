import { combineReducers } from '@reduxjs/toolkit';
import categories from './CategoriesSlice';
import category from './CategorySlice'

const reducer = combineReducers({
    categories,
    category
})
export default reducer