import React from 'react'

const LowerBanner = () => {
    return (

        <div>
           <div className='relative bg-lowerbanner bg-center bg-cover h-screen  drop-shadow-lg'>
                <div className='absolute top-20 w-full p-5 md:p-10'>
                    <h1 className='text-white text-5xl md:text-6xl lg:text-7xl font-Nunito font-bold'>Still deciding</h1>
                    <h1 className='text-white text-5xl md:text-6xl lg:text-7xl font-Nunito font-bold'>about travelling ?</h1>
                </div>
                <div className='absolute bottom-20 p-5 md:p-10'>
                    <button className='bg-white text-black p-1 pl-3 pr-3 rounded-xl hover:text-red-400 text-md md:text-xl font-Nunito font-bold'>Ask Us</button>
                </div>
                <div className="absolute w-full h-28 bg-gradient-to-t from-black to-transparent bottom-0 z-20"/>
           </div>
        </div>
    )
}

export default LowerBanner
