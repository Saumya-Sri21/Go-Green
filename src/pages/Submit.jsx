import React from 'react'
import img from '../assets/hi.jpg'

function Submit() {
  return (
    <div className='max-w-full h-screen '>
            <div className='w-1/2 h-3/4 bg-white text-[25px] font-bold text-center flex flex-col items-center justify-center border rounded-3xl mx-auto mt-10 gap-2'>
    
           <div>Hey User!...Thanks for your Message! 
           </div>

           <div>We'll connect with you soon.</div>
    
           <div><img src={img} width={150} height={150} alt="Image" srcset="" /></div>
            </div>
    
        </div>
  )
}

export default Submit
