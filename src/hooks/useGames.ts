import { GameQuery } from "../App";
import useData from './useData';
import { Genres } from './useGenres';

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

  
const useGames = (gameQuery: GameQuery) => useData<Game>("/games",
{
  params: {
    genres: gameQuery.genre?.id,
    platforms: gameQuery.platform?.id,
  },
},
// [selectedGenre?.id, selectedPlatform?.id])
[gameQuery]);

export default useGames;