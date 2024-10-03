export const tmdb_path = "https://image.tmdb.org/t/p/original"

export interface CarouselMovies {
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    vote_count: number;
}

export interface MovieCard{
    id: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    original_language: string;
}
