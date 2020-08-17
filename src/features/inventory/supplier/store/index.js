import {combineReducers} from '@reduxjs/toolkit'
// import supplier from './SupplierSlice'
import suppliers from './SuppliersSlice'

const reducer=combineReducers({
    // supplier,
    suppliers
})

export default reducer