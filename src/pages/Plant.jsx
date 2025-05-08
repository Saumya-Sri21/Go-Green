import React from 'react'
import img from '../assets/bob.jpg'

function Plant() {
  return (
    <div className='max-w-full h-screen '>
        <div className='w-1/2 h-3/4 bg-white text-[25px] font-bold flex flex-col text-center items-center justify-center border rounded-3xl mx-auto mt-10 gap-5'>

       <div>The site is under Construction... 
       </div>

       <div><img src={img} width={100} height={150} alt="Image" srcset="" /></div>
        </div>

    </div>
  )
}

export default Plant
