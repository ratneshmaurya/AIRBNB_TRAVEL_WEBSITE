import React from 'react'

const Cards = ({src,title,description}) => {
    return (

        <div className='p-2 m-2 flex flex-col border border-gray-200 w-full md:w-11/12 rounded-xl cursor-pointer shadow-lg space-y-2 transform transition duration-500 hover:scale-105'>
            <img src={src} className='h-screen-60 rounded-t-xl  object-cover w-full ' alt="image" />
            <h1 className='text-center font-bold font-Nunito text-xl md:2xl lg:text-3xl '>{title}</h1>
            <p className='text-center font-bold font-Poppins text-sm md:base'>{description}</p>
        </div>
    )
}

export default Cards
