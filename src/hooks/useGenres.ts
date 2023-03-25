
import genres from "../data/genres";

  export interface Genres {
    id: number;
    name: string;
    slug:string;
    games_count:number;
    image_background:string;

  }

  
// const useGenres = () => useData<Genres>("/genres");
const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres;