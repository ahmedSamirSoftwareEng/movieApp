export interface Movie {
   
     
        adult: boolean;
        backdrop_path: string;
        id: number;
        title: string;
        original_language: string;
        original_title: string;
        overview: string;
        desc?: string;
        poster_path: string;
        media_type: string;
        genre_ids?: (number)[] | null;
        popularity: number;
        release_date: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
    
      
}
