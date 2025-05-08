import React from 'react';
import Carousel from '../Components/Home/Carousel';
function Home() {
    return (
        <div className='max-w-full h-fit overflow-x-hidden no-scrollbar'>

            <div className='px-28 py-8 flex-row items-center justify-center no-scrollbar'>
                <div>
                    <div className='font-bold text-gray-500 text-[25px]'>Go Green</div>
                    <div className='flex flex-col gap-9 items-center justify-center font-serif md:flex-row '>
                        <div className='font-bold text-[50px]'>The World Of Plants</div>
                        <div className='text-[20px]'>Discover Everything you about plants. Treat them with kindness and they will take care of you</div>
                    </div>
                </div>

                <div className='m-0'>
                    <Carousel />
                </div>
            </div>
            




        </div>
    );
}

export default Home;
