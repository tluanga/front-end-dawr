import axios from 'axios'
import {productUrl} from './config'

const url=productUrl
export const getProducts=async()=>{
    try{
        const response=await axios.get(url)
        return response.data
    }
    catch(err){
        throw err
    }
 
}

export const putProduct=async(payload)=>{
    try{
        const response= await axios.post(
            url,payload
        )
        return response
    }
    catch(err){
        throw(err)
    }
}

// ET /Product/?id__iexact=1&name__icontains=&abbreviation__icontains=
export const getProduct=async(params)=>{
    const url=new URL(url)
    
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

