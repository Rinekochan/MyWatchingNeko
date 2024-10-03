import React, { useEffect, useState } from 'react'

import { baseApi } from '../../api/axiosInstance';
import { CarouselMovies } from '../../utils/constant';
import { HomeCarousel } from './HomeCarousel';
import HomeCarouselList from './HomeCarouselList';

const HomeSlider: React.FC = () => {
    const [carouselMovies, setCarouselMovies] = useState<CarouselMovies[]>([])
    const [selectedMovieIndex, setSelectedMovieIndex] = useState<number>(0)
    const [nextMoviesIndex, setNextMoviesIndex] = useState<number[]>([1, 2, 3])

    const fetchUpcoming = async () => {
        try {
            const response = await baseApi.get('/3/movie/upcoming?language=en-US&page=1')
            setCarouselMovies(response.data.results)
        }
        catch (err) {
            console.error("Fetch upcoming movies error", err);
        }
    }

    useEffect(() => {
        fetchUpcoming()
    }, [])


    useEffect(() => {
        if (carouselMovies.length) {
            const index_1 = (selectedMovieIndex + 1) % carouselMovies.length
            const index_2 = (selectedMovieIndex + 2) % carouselMovies.length
            const index_3 = (selectedMovieIndex + 3) % carouselMovies.length

            setNextMoviesIndex([index_1, index_2, index_3])
        }
    }, [selectedMovieIndex])

    useEffect(() => {
        const myCarousel = document.getElementById("carousel")

        const handleSlide = (event: Event) => {
            const customEvent = event as any
            setSelectedMovieIndex(customEvent.to)
        }

        if (myCarousel) {
            myCarousel.addEventListener('slid.bs.carousel', handleSlide)
            return () => {
                myCarousel.removeEventListener('slid.bs.carousel', handleSlide)
            }
        }
        
    }, [])

    return (
        <div className="row">
            <div className='relative col-8'>
                <div id="carousel" className="carousel slide">
                    <HomeCarousel carouselMovies={carouselMovies} />
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="col-4">
                <HomeCarouselList next={nextMoviesIndex} carouselMovies={carouselMovies} />
            </div>
        </div>
    )
}

export default HomeSlider