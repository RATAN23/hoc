import { useEffect, useState } from "react"
import axios from 'axios';

export const useFetch = (url , options = {method : "GET"}) => {
    const [data, setData] = useState(null);
    const [loading , isLoading] = useState(false);
    const [error , setError] = useState(null);

    useEffect(() => {
       const fetchData = async()=>{
        try{
            isLoading(true);
            const dataRet = await axios.get(url , {...options});
            if(dataRet?.data) {
                setData(dataRet.data);
                isLoading(false);
            } else{
                throw new Error("Error found");
            }
        }
        catch(e){
            isLoading(false);
            setError(e.message);
        }
       }
            
       if(url){
         fetchData();
       }
    }, [url]);


    return {data, loading , error};

}