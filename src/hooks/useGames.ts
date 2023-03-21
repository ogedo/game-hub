import { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform: Platform}[];
    metacritic:number;
  }

  export interface Platform {
    id: number;
    name: string;
    slug:string;
  }

  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

  
const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

  //send the request to the server
  useEffect(() => {
        //handle cancellation request
    const controller = new AbortController();

    //set loading to true before sending the request
    setLoading(true);
    
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) =>  {
        setGames(res.data.results);
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

  return {games, error, isLoading}

}

export default useGames