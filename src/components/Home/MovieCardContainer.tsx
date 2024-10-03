import React, { useState } from 'react'
import { MovieCard, tmdb_path } from '../../utils/constant';
import ISO6391 from 'iso-639-1';

interface MovieProps {
    movie: MovieCard;
    index: number;
}

const MovieCardContainer: React.FC<MovieProps> = ({ movie, index }) => {
    const [hover, setHover] = useState<number | null>(null)
    
    return (
        <div className='col' onMouseEnter={() => setHover(movie.id)} onMouseLeave={() => setHover(null)}>
            <div key={index} className={`my-3 border-2 border-zinc-800 rounded-md overflow-hidden ${movie.id === hover ? "scale-[102%]" : ""} duration-200`}>
                <div className="relative overflow-hidden">
                    <img src={tmdb_path + movie.poster_path} alt="" />
                    <div className='absolute bottom-0 w-full h-28 _carouselGradient'></div>
                </div>
                <div className="bg-[#222] p-2">
                    <h2 className={`text-[17px] font-semibold line-clamp-1 ${movie.id === hover ? "underline" : ""}`}>{movie.title}</h2>
                    <div className='text-[15px] text-zinc-300 mt-2'>
                        <p className=''>Rating : {String(movie.vote_average).substring(0, 3)}</p>
                        <p>Language: {ISO6391.getName(movie.original_language)} </p>
                        <p>Release: {movie.release_date} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCardContainer
