import React from 'react'
import { useDispatch } from 'react-redux'
import {newSupplier,saveSupplier} from './store/SuppliersSlice'
import { Button, TextField, Paper, FormControl } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/core/styles'
import {useForm} from 'react-hook-form'


const useStyles = makeStyles(theme => ({
    paperStyle: {
        padding:10
    },
        
    formBody: {
        display: 'flex',
        justifyContent:'space-evenly',
        marginTop: 30,
        marginLeft:10
        
    },
    formButtons: {
        marginTop: 10,
        marginBottom:10
    }

}  
))

function SupplierForm() {
    const dispatch=useDispatch()
    const classes = useStyles()
    //React hook Form initialization
    const { register, handleSubmit, errors } = useForm()
    const onSubmit=data=>dispatch(saveSupplier(data))

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Supplier</h1>
        <Paper elevation={5} className={classes.paperStyle}>
          <div className={classes.formBody}>
            <TextField
              name="name"
              placeholder="name"
              variant="outlined"
              inputRef={register}
            />
            <TextField
              name="address"
              placeholder="Address"
              variant="outlined"
              inputRef={register}
            />
            <TextField
              name="contact"
              placeholder="Mobile"
              variant="outlined"
              inputRef={register}
            />
            <TextField
              name="pinCode"
              placeholder="Pin Code"
              variant="outlined"
              inputRef={register}
            />
            <TextField
              name="gst_no"
              placeholder="GST"
              variant="outlined"
              inputRef={register}
            />
            <TextField
              name="remarks"
              placeholder="Remarks"
              variant="outlined"
              inputRef={register}
            />
          </div>
          <div className={classes.formButtons}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <Button variant="contained" color="secondary">
              Clear
            </Button>
          </div>
        </Paper>
      </form>
    );
}

export default SupplierForm
