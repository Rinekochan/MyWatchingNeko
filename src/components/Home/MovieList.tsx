import React, { useEffect, useState } from 'react'
import { MovieCard } from '../../utils/constant'
import MovieCardContainer from './MovieCardContainer'
import { baseApi } from '../../api/axiosInstance'


const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<MovieCard[]>([])
    const fetchMovies = async () => {
        try {
            const response = await baseApi.get('3/movie/top_rated?language=en-US&page=1')
            setMovies(response.data.results)
        }
        catch (e) {
            console.log("Fetch error in homepage top rated movies", e);
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <div className='my-14'>
            <h1 className='text-3xl font-bold text-purple-400 mb-4'>Top Rated Movies</h1>
            <div className="row row-cols-6">
                {
                    movies.length > 0 && movies.map((data, index) => (
                        <MovieCardContainer movie={data} index={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList
