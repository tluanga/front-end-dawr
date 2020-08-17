import React from 'react';
import { useDispatch,useSelector } from 'react-redux'
import {saveProduct} from './store/ProductsSlice'
import {selectCategories} from '../category/store/CategoriesSlice'
import { useForm } from 'react-hook-form'


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';

const category = [
    {
        id:1, name:'electrical'
    },
    {
        id: 2,
        name:'electronics'
    }

]

export default function FormDialog() {
    const dispatch = useDispatch()
  const categories = useSelector(selectCategories)
    console.log(categories)
    
    const [open, setOpen] = React.useState(false);
    const {register,handleSubmit} = useForm()

    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = (data) => {
        console.log(data)
        dispatch(saveProduct(data))
    }
        

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          New Product
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={{ padding: 0 }}>
            Create New Product
          </DialogTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                name="name"
                label="Name"
                type="text"
                fullWidth
                inputRef={register}
                // style={{height:1 }}
              />

              <TextField
                autoFocus
                margin="dense"
                id="brand"
                label="Brand"
                type="text"
                fullWidth
                inputRef={register}
                name="brand"
              />
              <TextField
                autoFocus
                margin="dense"
                id="model"
                label="Model"
                type="text"
                fullWidth
                inputRef={register}
                name="model"
              />
              <Autocomplete
                id="combo-box-demo"
                options={categories}
                getOptionLabel={(option) => option.name}
                style={{ width: 400, paddingTop: 30 }}
                renderInput={(params) => (
                  <TextField {...params} label="Category" variant="outlined" />
                )}
              />
              {/* <TextField
                            autoFocus
                            margin="dense"
                            id="category"
                            label="Category"
                            type="Number"
                            fullWidth
                            inputRef={register}
                            name='category'

                        /> */}
              <TextField
                autoFocus
                margin="dense"
                id="gst_code"
                label="GST"
                type="text"
                fullWidth
                inputRef={register}
                name="gst_code"
              />

              <TextField
                autoFocus
                margin="dense"
                id="cost_price"
                label="Cost Price"
                type="number"
                fullWidth
                inputRef={register}
                name="cost_price"
              />
              <TextField
                autoFocus
                margin="dense"
                id="selling_price"
                label="Selling Price"
                type="number"
                fullWidth
                inputRef={register}
                name="selling_price"
              />
              <TextField
                autoFocus
                margin="dense"
                id="mrp"
                label="Mrp"
                type="number"
                fullWidth
                inputRef={register}
                name="mrp"
              />
              <Autocomplete
                id="combo-box-demo"
                options={category}
                getOptionLabel={(option) => option.name}
                style={{ width: 400, paddingTop: 30 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Unit of Measurement"
                    variant="outlined"
                  />
                )}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
}