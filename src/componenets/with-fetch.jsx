import { useEffect, useState } from "react";
import axios from 'axios';

const withFetch = (url , options = {method : "GET"}) => (WrappedComponent) => {
    const FetchComponent = (props) => {
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
 
      return <WrappedComponent {...props} data = {data} loading = {loading} error = {error}/>
    }
    return FetchComponent;
};

export default withFetch;