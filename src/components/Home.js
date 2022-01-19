import React from 'react'
import UpperBanner from './UpperBanner'
import Cards from './Cards'
import LowerBanner from './LowerBanner'

const Home = () => {
    return (
        <div className=''>
            <UpperBanner/>
           
           <div className='flex flex-col relative sm:p-5 p-10'>
                <div className='flex flex-row mt-10'>
                    <h1 className='text-2xl md:3xl lg:text-4xl font-Nunito font-bold w-3/4 md:w-full'>Inspiration for your next trip</h1>
                </div>
                <div className='mt-5 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full space-x-4'>
                    
                    <Cards
                        src="https://images.unsplash.com/photo-1579689189009-874f5cac2db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
                        title="Shimla"
                        description="One of the most popular hill stations in northern India..."
                    />
                    <Cards 
                        src="https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        title="Manali"
                        description="A gift of the Himalayas to the world..."
                    />
                    <Cards
                        src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        title="Agra"
                        description="A city offering a discovery of the beautiful era..."
                       
                    />
                    <Cards
                        src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        title="Jaipur"
                        description="One of the most beautiful and culturally rich cities in India..."
                       
                    />
                </div>
            </div>

            <LowerBanner/>
        </div>
    )
}

export default Home
