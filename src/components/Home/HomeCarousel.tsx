import React from 'react'
import { CarouselMovies, tmdb_path } from '../../utils/constant'
import { FaRegThumbsUp } from 'react-icons/fa'

interface CarouselProps {
    carouselMovies: CarouselMovies[]
}

export const HomeCarousel : React.FC<CarouselProps> = ({carouselMovies}) => {
    return (
        <div className="carousel-inner">
            {
                carouselMovies.map((movie, index) => (
                    <div className={`carousel-item ${index == 0 ? "active" : ""}`}>
                        <div className='relative '>
                            {/* <div className="block w-[900px] bg-red-300 aspect-[7/4]"></div> */}
                            <img src={tmdb_path + movie?.backdrop_path} className='w-full aspect-[9/5]' alt="" />
                            <div className='absolute bottom-0 h-44 w-full _carouselGradient'></div>
                        </div>
                        <div className="absolute bottom-0 flex items-end gap-4 px-4">
                            <img src={tmdb_path + movie?.poster_path} className='w-[160px] aspect-[4/5]' alt="" />
                            <div className="flex flex-col gap-1">
                                <h1 className='text-4xl text-white'>{movie?.title}</h1>
                                <p className='w-[500px] text-xl line-clamp-3 text-zinc-400'>{movie?.overview}</p>
                                <div className='flex items-center gap-1 text-zinc-400 text-lg'>
                                    <FaRegThumbsUp />
                                    <p className='text-lg'>{movie?.vote_count}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        
    )
}