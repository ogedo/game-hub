import { CanceledError } from 'axios';
import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

  export interface Genres {
    id: number;
    name: string;
    slug:string;
    games_count:number;
    image_background:string;

  }

  interface FetchGenresResponse {
    count: number;
    results: Genres[];
  }

  
const useGenres = () => {

    const [genres, setGenres] = useState<Genres[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

  //send the request to the server
  useEffect(() => {
        //handle cancellation request
    const controller = new AbortController();

    //set loading to true before sending the request
    setLoading(true);
    
    apiClient
      .get<FetchGenresResponse>("/genres", {signal: controller.signal})
      .then((res) =>  {
        setGenres(res.data.results);
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

  return {genres, error, isLoading}
};

export default useGenres;