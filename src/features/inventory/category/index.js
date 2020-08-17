import React from 'react'

import CategoryTable from './CategoryTable'
import CategoryDialog from './CategoryDialog'


const Category = () => {
    return (
        <div>
            <h1>Category</h1>
            <CategoryDialog/>
            <CategoryTable />
            {/* <CategoryTest/> */}
            
        </div>
    )
}

export default Category