import React from 'react'

const UpperBanner = () => {
    return (
        <div>
           <div className='relative bg-homebanner bg-center bg-cover h-screen  drop-shadow-lg'>
                <div className='absolute bottom-20 w-full text-center'>
                    <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-Nunito font-bold'>Not sure where to go? Perfect.</h1>
                </div>
                <div className="absolute w-full h-28 bg-gradient-to-t from-black to-transparent bottom-0 z-20"/>
           </div>
        </div>
    )
}

export default UpperBanner
