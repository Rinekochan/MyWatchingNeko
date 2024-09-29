import React from 'react'
import { CarouselMovies, tmdb_path } from '../../utils/constant';
import { FaRegThumbsUp } from 'react-icons/fa';

interface CarouselListProps {
    next: number[]
    carouselMovies: CarouselMovies[]
}

const HomeCarouselList: React.FC<CarouselListProps> = ({ next, carouselMovies }) => {
    console.log(next);

    return (
        <div>
            <h1 className="font-bold text-xl text-red-500 py-3">Up Next</h1>
            {
                next.map((item, index) => (
                    <div className="flex gap-2 py-3">
                        <img src={tmdb_path + carouselMovies[item]?.poster_path} className='w-[100px]' alt="" />
                        <div className='flex flex-col justify-between py-2 px-2'>
                            <div className="leading-5">
                                <h1>{carouselMovies[item]?.title}</h1>
                                <p className='text-md text-zinc-300 line-clamp-3'>{carouselMovies[item]?.overview}</p>
                            </div>
                            <div className="flex items-center gap-1 text-center">
                                <FaRegThumbsUp />
                                <p>{carouselMovies[item]?.vote_count}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HomeCarouselList
