import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import { TextField, InputLabel } from '@material-ui/core'
import {selectSupplierbyId,getSupplierData} from './store/SuppliersSlice'

const SupplierDetail = (supplier) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    // get supplier data from the state
    
    useEffect(()=>{
        dispatch(getSupplierData(id))
    },[dispatch, id])
    const supplierData = useSelector((state) => selectSupplierbyId(state, id))
    // check supplierData is empty or not
    // //if empty call a selector in the slice
    // if (supplierData==null) {
    //     dispatch(getSupplierData(id))
    //     supplierData = useSelector((state) => selectSupplierbyId(state, id))
    // }
    
    console.log(supplierData)
    
    
    return (
        <div>
            <h1>Supplier Detail</h1>
            <form>
                <div>
                    <InputLabel>Name</InputLabel>
                    <TextField                        
                        placeholder={supplierData.name||''}
                    />
                </div>
                <div>
                    <InputLabel>Address</InputLabel>
                    <TextField
                        placeholder='C-87, Ramhlun Nort'
                    />
                </div>
                
                
            </form>
        </div>
    )
}

export default SupplierDetail

