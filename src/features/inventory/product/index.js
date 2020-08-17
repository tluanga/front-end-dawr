import React, { useEffect } from 'react'
import './Product.css'
import {useDispatch} from 'react-redux'
import {fetchCategories} from '../category/store/CategoriesSlice'
import ProductTable from './ProductTable'
import ProductDialog from './ProductDialog'

const Index = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchCategories())  
    },[dispatch])
    return (
        <div className='product'>
            <h1>Products</h1>
            <ProductDialog />
            <ProductTable/>
            
        </div>
    );
}

export default Index
