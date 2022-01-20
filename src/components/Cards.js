import React from 'react'

const Cards = ({src,title,description,middlecards}) => {
    return (
        middlecards?
        <div className='p-2 m-2 flex flex-col border border-gray-200 w-full md:w-11/12 rounded-xl cursor-pointer shadow-lg space-y-2 transform transition duration-500 hover:scale-105'>
            <img src={src} className='h-screen-60 rounded-t-xl  object-cover w-full ' alt="image" />
            <h1 className='text-center font-bold font-Nunito text-xl md:2xl lg:text-3xl '>{title}</h1>
            <p className='text-center font-bold font-Poppins text-sm md:base'>{description}</p>
        </div>
        :
        <div className='relative m-2 h-screen-80 flex flex-col border border-gray-200 w-full md:w-11/12 rounded-xl cursor-pointer shadow-lg transform transition duration-500 hover:scale-105'>
            <img src={src} className='h-screen-80 rounded-xl  object-cover w-full ' alt="image" />
            <h1 className=' absolute bottom-10 left-10 w-1/2 text-center text-white font-bold font-Nunito text-3xl md:text-5xl'>{title}</h1>
        </div>
    )
}

export default Cards
