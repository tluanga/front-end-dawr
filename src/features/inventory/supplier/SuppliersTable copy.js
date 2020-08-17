import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { getSupplierData, selectSuppliers } from './SupplierSlice'
// Material
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


function SuppliersTable() {
    const suppliers = useSelector(selectSuppliers)
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getSupplierData())   
    },[dispatch])

    //Material
    const classes=useStyles()
    
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Mobile Number</TableCell>
                        <TableCell>GST No</TableCell>
                        <TableCell>Remarks</TableCell>
                    </TableHead>
                    <TableBody>
                        {suppliers.map(supplier => (
                            <TableRow key={supplier.id}>
                                <TableCell>{supplier.id}</TableCell>
                                <TableCell>{supplier.name}</TableCell>
                                <TableCell>{supplier.address}</TableCell>
                                <TableCell>{supplier.contact}</TableCell>
                                <TableCell>{supplier.gst_no}</TableCell>
                                <TableCell>{supplier.remarks}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SuppliersTable
