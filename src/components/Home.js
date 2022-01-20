import React from 'react'
import UpperBanner from './UpperBanner'
import Cards from './Cards'
import LowerBanner from './LowerBanner'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='flex flex-col'>
            {/*-------------upper banner iamge ------------------- */}
            <UpperBanner/>
           

           {/* ----------------upper images cards --------------*/}
           <div className='flex flex-col relative sm:p-5 p-10'>
                <div className='flex flex-row mt-10'>
                    <h1 className='text-2xl md:3xl lg:text-4xl font-Nunito font-bold w-3/4 md:w-full'>Inspiration for your next trip</h1>
                </div>

                <div className='mt-5 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full md:space-x-4'>
                    
                    <Cards
                        src="https://images.unsplash.com/photo-1579689189009-874f5cac2db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
                        title="Shimla"
                        description="One of the most popular hill stations in northern India..."
                        middlecards='true'
                    />
                    <Cards 
                        src="https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        title="Manali"
                        description="A gift of the Himalayas to the world..."
                        middlecards='true'
                    />
                    <Cards
                        src="https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        title="Agra"
                        description="A city offering a discovery of the beautiful era..."
                        middlecards='true'
                       
                    />
                    <Cards
                        src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        title="Jaipur"
                        description="One of the most beautiful and culturally rich cities in India..."
                        middlecards='true'
                       
                    />
                </div>
            </div>


            {/* ----------------lower images cards --------------*/}
            <div className='flex flex-col relative sm:p-5 p-10'>
                <div className='flex flex-row mb-2'>
                    <h1 className='text-2xl md:3xl lg:text-4xl font-Nunito font-bold w-3/4 md:w-full'>Discover Airbnb Experiences</h1>
                </div>

                <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 w-full lg:space-x-4'>
                    <Cards
                        src="https://images.unsplash.com/photo-1534540378968-85a7b8fde19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxIVXU1UEF5ckstMHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                        title="Things to do on your trip"
                    />
                    <Cards
                        src="https://images.unsplash.com/photo-1533777419517-3e4017e2e15a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        title="Things to do from home"
                    />
                                
                </div>
            </div>


            {/* ------------lower image banner --------------- */}
            <LowerBanner/>

            {/* -----------footer section---------------------- */}
            <Footer/>
        </div>
    )
}

export default Home
