import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { selectCategories,fetchCategories} from './store/CategoriesSlice'
import {selectedCategory} from './store/CategorySlice'
import {fetchCategory} from './store/CategorySlice'
import {Styles,ReactTable} from '../../../app/components/Table'




const CategoryTable = () => {
    
    const categories = useSelector(selectCategories)
    // const suppliers = []
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch,categories])

    

    const columns = React.useMemo(
        () => [
            
            {
                Header: "Sl.No",
                accessor: "id",

            },
            {
                Header: "Name",
                accessor: "name",
                Cell: ({row}) => (
              
                    <Link to={`/inventory/category/${row.original.id}`}>{row.original.name}</Link>
                   
                )
            },
            {
                Header: "Abbreviation",
                accessor: "abbreviation",
            },
            {
                Header: "Status",
                accessor: "active",
                Cell: ({ cell: { value } }) => {
                    if (value === true) {
                        return 'active'
                    } else {
                        return 'in-active'
                    }

                }
                //     (
                //     // <Link to={`/book/${book.id}`}>Show details</Link>
                
                //    String(value)
                
                //     // <Link to={`/suppliers/1`}>
                //     //     {value}
                //     // </Link>
                // )
            }
            
       
        ],
        []
    );


    return (
        <div>
            <Styles>
                <ReactTable columns={columns} data={categories} />
            </Styles>            
               
            
        </div>
    );
}

export default CategoryTable