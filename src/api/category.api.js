import axios from 'axios'
import {categoryUrl} from './config'


export const getCategories=async()=>{
    try{
        const response=await axios.get(categoryUrl)
        return response.data
    }
    catch(err){
        throw err
    }
 
}

export const putCategory=async(payload)=>{
    try{
        const response= await axios.post(
            categoryUrl,payload
        )
        return response
    }
    catch(err){
        throw(err)
    }
}

// ET /category/?id__iexact=1&name__icontains=&abbreviation__icontains=
export const getCategory=async(params)=>{
    const url=new URL(categoryUrl)
    
    url.searchParams.append('id__iexact',params.id)
    
    try{
        const response=axios.get(url)
            .then(response=>response.data)
            .then(data=>data[0])        
        return response
    }
    catch(err){
        throw err
    }

}

