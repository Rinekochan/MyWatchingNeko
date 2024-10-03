import React, { useState } from 'react'
import { CarouselMovies, tmdb_path } from '../../utils/constant';
import { FaRegThumbsUp } from 'react-icons/fa';

interface CarouselListProps {
    next: number[]
    carouselMovies: CarouselMovies[]
}

const HomeCarouselList: React.FC<CarouselListProps> = ({ next, carouselMovies }) => {
    const [hover, setHover] = useState<number | null>(null)
    return (
        <div>
            <h1 className="font-bold text-xl text-purple-400 mt-4">Up Next</h1>
            {
                next.map((item, index) => (
                    <div key={index} className="flex gap-2 my-3" onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)} >
                        <img src={tmdb_path + carouselMovies[item]?.poster_path} className='w-[100px]' alt="" />
                        <div className='flex flex-col justify-between my-2 mx-2'>
                            <div className="leading-5">
                                <h1 className={`${hover === index ? "underline" : ""}`}>{carouselMovies[item]?.title}</h1>
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
