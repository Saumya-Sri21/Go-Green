import React from 'react'
import { motion } from 'framer-motion'
import v1 from '../assets/v1.mp4'
import v2 from '../assets/v2.mp4'
import v3 from '../assets/v3.mp4'

function About() {
  const videoLinks = [
   v1,v2,v3
  ]

  return (
    <div className='max-w-full min-h-screen px-28 py-8 text-[20px] text-gray-800'>
      <h1 className='text-black font-bold font-sans text-[25px] mb-2'>About</h1>
      <div className='w-full bg-black h-[1px] mb-6'></div>

      <div className="my-10 flex gap-6 flex-wrap justify-center items-center">
        {videoLinks.map((link, index) => (
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            key={index}
            src={link}
            className="w-[250px] h-[200px] rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5, duration: 0.8 }}
          />
        ))}
      </div>

      <div className='space-y-4'>
        <div>Welcome to Go Green – your one-stop destination for bringing nature closer to your home!</div>

        <div>At Go Green, we believe in creating a greener, healthier planet by encouraging everyone to add a touch of nature to their lives. Our platform offers a wide variety of indoor and outdoor plants that not only beautify your space but also purify the air and uplift your mood.</div>

        <div>We are passionate about promoting eco-friendly living. Every plant on our website comes with detailed information about its care, benefits, and ideal environment – so whether you're a beginner or a seasoned plant parent, you'll find the perfect green companion here.</div>

        <div>By choosing Go Green, you’re not just buying a plant – you’re joining a movement towards sustainable and mindful living.</div>

        <div className='font-sans font-bold text-[25px]'>Grow with us... Go green... Stay green!</div>
      </div>

      
    </div>
  )
}

export default About
