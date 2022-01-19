import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';
import Search from './Search';

const Header = () => {

    const[showSearch,setShowSearch]=useState(false);
    console.log(showSearch);

    return (
        <div className='sticky top-0 z-10 flex flex-col'>
            <div className='flex items-center sticky z-10 w-full top-0 bg-white p-2 pb-3 drop-shadow-md'>
            
                <div className='cursor-pointer'>
                    {/* here displaying the larger image log only when medium screen come, else displaying the lower one image of airbnb which is a smaller logo for mobile size */}
                    <img className='h-20 hidden md:block' src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032017/untitled-6_25.png?itok=9ZEI6gJ3" alt="logo" />
                    <img className='h-14 md:hidden' src="https://cdn.pixabay.com/photo/2018/05/08/21/28/airbnb-3384008_960_720.png" alt="logo"/>
                </div>

                {/* the search container part */}
                {/* making two div, one for taking whole width,and other one inside this to remains in middle */}
                <div className='flex flex-1 justify-center items-center'>
                    <div className='border shadow-md  border-gray-400 pl-2 rounded-3xl justify-center items-center' onClick={()=>setShowSearch(!showSearch)}>
                        <input className='text-sm p-1 h-7 bg-white pl-2 focus:outline-none' type="text" disabled placeholder='search'/>
                        <IconButton><SearchIcon className=''/></IconButton>   
                    </div>
                </div>
            

                {/* show this div only when md screen comes */}
                <div className='hidden md:flex flex space-x-1 items-center p-1 ml-1'>
                    <p className='cursor-pointer p-2 rounded-xl hidden md:block font-Poppins text-xs hover:bg-gray-100 font-bold'>Become a host</p>
                    
                    <IconButton><LanguageIcon/></IconButton>
                    <IconButton><ExpandMoreIcon className=''/></IconButton>
                    <IconButton><Avatar className='scale-100'/></IconButton>
                </div>

            </div>

            {showSearch && <Search/>}
            
        </div>
        
    )
}

export default Header
