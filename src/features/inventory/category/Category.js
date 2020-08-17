import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {selectCategoryById,selectCategory } from './store/CategorySlice'
import { fetchCategory} from './store/CategorySlice'
import {useParams, Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const Category=()=>{
    const {id}=useParams()
    const dispatch=useDispatch()
    const category=(useSelector(state => selectCategoryById(state, id)))
    console.log(category)
    // const category = useSelector(state => state.inventory.categories.category)
    
   
    // console.log(category)
    useEffect(() => {
        dispatch(fetchCategory(id))        
    }, [dispatch, id,category])

    // console.log(category)
    const { register, handleSubmit } = useForm()
    // const category = useSelector(state => selectCategoryById(state, id))
    // For accessing a normalized data
    
    const onSubmit = (data) => console.log(data)
    
    return category.name?<div>
                <h1>Current State</h1>
                
                <h1>Category</h1>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        name='id'
                        id='id'
                        label='id'
                        variant='outlined'
                        defaultValue={category.id}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputRef={register}
                    />
                    <TextField
                        name='name'
                        id='name'
                        label='name'
                        variant='outlined'
                        defaultValue={category.name}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputRef={register}
                    />
                    <TextField
                        name='abbreviation'
                        id='abbreviation'
                        label='Abbreviation'
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={category.abbreviation}
                        inputRef={register}
                    />
                    <Button type='submit'>Submit</Button>

                </form>

            </div>
            :'loading please wait....'
      
    
}

export default Category



// function ParentButt() {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getCategoryData(id));
//     }, [dispatch, id]);
//     const category = useSelector((state) => state.inventory.categories.category);

//     return category ? <Spinner /> : <Child category={category} />;
// }
