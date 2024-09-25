import React from 'react'

const Navbar: React.FC = () => {
    return (
        <nav className='bg-[#121212] py-2'>
            <div className="flex justify-between items-center w-[80%] mx-auto">
                <div className="flex space-x-16">
                    <div className="flex flex-col text-red-500">
                        <h1 className="text-[18px] leading-4">My Watching</h1>
                        <h1 className="text-[24px] leading-5 font-semibold">Neko</h1>
                    </div>
                    <button className='text-[18px] text-red-500 hover:underline'>EXPLORE</button>
                </div>
                <div className=''>
                    <input 
                    placeholder='Search'
                    className='w-[500px] h-10 bg-black text-[#c2c2c2] text-lg outline-none px-4 placeholder:text-[#646464] rounded'
                    type="text" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
