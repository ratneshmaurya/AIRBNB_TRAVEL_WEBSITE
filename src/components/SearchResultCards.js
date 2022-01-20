import React from 'react'
import StarRatings from 'react-star-ratings'

const SearchResultCards = ({image,location,title,description,rating,price}) => {
    return (
        <div className='flex flex-col md:flex-row shadow-lg w-full border border-gray-200 rounded-xl'>

            <div className='h-screen/2 md:w-1/2 p-3 mt-2'>
                <img src={image} className='h-full rounded-xl  object-cover w-94percent mx-auto transform transition duration-500 hover:scale-105' alt="image" />
            </div>

            <div className='flex flex-col md:w-1/2 p-4 space-y-1'>
                <h1 className='text-xs md:text-sm font-Nunito text-gray-400'>{location}</h1>
                <h1 className='text-lg md:text-xl font-Nunito font-bold pb-2'>{title}</h1>
                <hr className='ml-4 mr-4 broder border-gray-300'/>
                <p className='text-sm md:text-base font-Nunito text-gray-400'>{description}</p>
                 
                {/* adding an empty div with flex-1 so that it takes the whole space between and push the starts and price section at bottom */}
                <div className='flex-1'></div> 


                 {/* now a div, containg rating div and price div, show rowise above medium screen and column below medium screen */}
                <div className='flex flex-col md:flex-row md:justify-between'>

                    {/* making starts of rating */}
                    <div className='flex space-x-2 items-center'>
                        <h1><StarRatings
                            rating={rating}
                            starRatedColor="blue"
                            numberOfStars={5}
                            starDimension={10}
                            starSpacing={0}
                            starRatedColor="red"
                        /></h1>
                        
                        <p className='text-xs md:text-sm font-Nunito text-gray-400'>{rating}</p>
                        </div>

                    {/* price section */}
                    <div >
                        <h1 className='text-xl md:text-2xl font-extrabold font-Nunito'>₹{price}/night</h1>
                    </div>
                </div>

                <button className='text-sm md:text-lg ml-2 mr-2 font-Nunito border bg-gray-100 text-gray-600 hover:bg-red-400 hover:text-white p-2 rounded-xl'>Book now</button>

            </div>

        </div>
    )
}

export default SearchResultCards
