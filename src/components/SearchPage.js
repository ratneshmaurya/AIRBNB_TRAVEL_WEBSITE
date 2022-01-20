import React from 'react'
import SearchResultCards from './SearchResultCards'
import { StaysDetails } from './StaysDetails'
import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton } from '@mui/material';

const SearchPage = () => {
    return (
        <div className='flex flex-col mt-5 p-5 md:p-10'>

            {/*------------------- filter options-------------- */}
            <div className='flex justify-around'>
                <button className='border rounded-xl hover:bg-gray-100 hover:border-gray-500 p-2 pl-4 pr-4 w-fit text-xs md:text-sm font-Nunito '>Price</button>
                <button className='border rounded-xl hover:bg-gray-100 hover:border-gray-500 p-2 pl-4 pr-4 w-fit text-xs md:text-sm font-Nunito '>Type of place</button>
                <button className='border rounded-xl hover:bg-gray-100 hover:border-gray-500 p-2 pl-4 pr-4 w-fit text-xs md:text-sm font-Nunito '>Free cancellation</button>
                <button className='border rounded-xl hover:bg-gray-100 hover:border-gray-500 p-2 pl-4 pr-4 w-fit text-xs md:text-sm font-Nunito '>Wifi</button>
                <button className='border rounded-xl hover:bg-gray-100 hover:border-gray-500 hidden md:inline p-2 pl-4 pr-4 w-fit text-xs md:text-sm font-Nunito '>Kitchen</button>
                <button className='border rounded-xl hover:bg-gray-100 hover:border-gray-500 hidden md:inline p-2 pl-4 pr-4 w-fit text-xs md:text-sm font-Nunito '>Bedroom</button>
                <button className='border rounded-xl hover:bg-gray-100 hover:border-gray-500 hidden md:inline p-2 pl-4 pr-4 w-fit text-xs md:text-sm font-Nunito '>Beds</button>
                <IconButton><FilterListIcon/></IconButton>
            </div>

            <hr className='m-4 border-gray-400'/>

            {/* ------------main heading------------------- */}
            <div className='flex flex-col mt-3 space-y-2'>
                <h1 className='text-2xl md:3xl lg:text-4xl font-Nunito font-bold'>200+ Stays nearby</h1>
                <h1 className='text-lg md:2xl lg:text3xl font-Nunito'>Explore all 200+ stays</h1>
            </div>

            <hr className='m-4 border-gray-400'/>

            {/* ----------showing places results in cards form--------------------------------- */}
            <div className='flex flex-col space-y-5 mt-2'>
                {StaysDetails.map(({id,image,location,title,description,rating,price})=>(
                    <SearchResultCards
                        key={id}
                        image={image}
                        location={location}
                        title={title}
                        description={description}
                        rating={rating}
                        price={price}
                    />
                ))}
            </div>
            
            {/* -------------------info line at last -------------------------------- */}
            <div className='pl-5 pr-5 mt-5'> 
                <h1 className='text-xs mx-auto w-fit md:text-sm font-Nunito text-gray-400'>Additional fees apply. Taxes may be added.</h1>
            </div>

        </div>
    )
}

export default SearchPage
