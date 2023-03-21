import { CanceledError } from 'axios';
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';


  interface FetchResponse<T> {
    count: number;
    results: T[];
  }

  
const useData = <T>(endpoint:string) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

  //send the request to the server
  useEffect(() => {
        //handle cancellation request
    const controller = new AbortController();

    //set loading to true before sending the request
    setLoading(true);
    
    apiClient
      .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
      .then((res) =>  {
        setData(res.data.results);
    //set loading to true before sending the request
         setLoading(false);
        })
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

      return ()=> controller.abort();
  }, []);

  return {data, error, isLoading}
};

export default useData;