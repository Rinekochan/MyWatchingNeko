import React from 'react'
import HomeSlider from '../../components/Home/HomeSlider'
import MovieList from '../../components/Home/MovieList'

const Home: React.FC = () => {

    return (
        <div className='w-[90%] mx-auto'>
            <HomeSlider />
            <MovieList />
        </div>
    )
}

export default Home
