import React, { useEffect } from 'react';
// Redux Part
import { useDispatch, useSelector } from 'react-redux'
import {saveCategory} from './store/CategoriesSlice'

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
        id: 1, name: 'electrical'
    },
    {
        id: 2,
        name: 'electronics'
    }

]

export default function FormDialog() {
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit } = useForm()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = (data) => {
        console.log(data)
        dispatch(saveCategory(data))
    }


    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                New Category
        </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title" style={{ padding: 2 }}>
                    Create New Category
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
                            id="abbreviation"
                            label="Abbreviation"
                            type="text"
                            fullWidth
                            inputRef={register}
                            name="abbreviation"
                        />  
                        <TextField
                            autoFocus
                            margin="dense"
                            id="Remarks"
                            label="Remarks"
                            type="text"
                            fullWidth
                            inputRef={register}
                            name="remarks"
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