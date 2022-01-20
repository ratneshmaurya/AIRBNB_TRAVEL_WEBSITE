import React from 'react'
import { Link } from 'react-router-dom'

const UpperBanner = () => {
    return (
        <div>
           <div className='relative bg-homebanner bg-center bg-cover h-screen  drop-shadow-lg'>
                <div className='absolute bottom-20 w-full text-center'>
                    <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-Nunito font-bold'>Not sure where to go? Perfect.</h1>
                </div>
                {/* <div className="absolute w-full border h-28 bg-gradient-to-t from-black to-transparent bottom-0 z-20"/> */}
                <Link to="/search">
                    <div className='absolute bottom-8 w-full text-center'>
                        <button className='bg-white text-black p-1 pl-8 pr-8 rounded-xl hover:text-red-400 text-md md:text-xl font-Nunito font-bold'>Explore Us</button>
                    </div>
                </Link>
                
           </div>
        </div>
    )
}

export default UpperBanner
