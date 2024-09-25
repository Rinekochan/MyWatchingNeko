import React from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'

const HomeCarousel = () => {
    return (
        <div className='relative'>
            <div className='relative w-[900px]'>
                <div className="block w-[900px] bg-red-300 aspect-[7/4]"></div>
                <div className='absolute bottom-0 h-44 w-full _carouselGradient'></div>
            </div>
            <div className="absolute bottom-0 flex items-end gap-4 px-4">
                <div className="block bg-blue-400 w-[160px] aspect-[4/5]"></div>
                <div className="flex flex-col gap-1">
                    <h1 className='text-4xl text-white'>Abra-ca-dabra</h1>
                    <h2 className='w-[500px] text-xl line-clamp-3 text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                    <div className='flex items-center gap-1 text-zinc-400 text-lg'>
                        <h1><FaRegThumbsUp /> </h1>
                        <h3 className='text-lg'>457</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCarousel
