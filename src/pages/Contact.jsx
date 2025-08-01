import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='max-w-full min-h-screen'>
      <div className='flex flex-col items-center justify-center mt-10 gap-[10px] lg:flex-row-reverse lg:relative lg:my-20'>
       
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='bg-white w-2/3 lg:w-1/2 h-96 m-auto shadow-xl rounded-lg'
        >
          <div className=' mt-5 lg:absolute text-black lg:top-10 lg:right-[27%] lg:mt-0 '>
            <form action="submit" className='flex flex-col gap-6 items-center justify-center'>
              <div>
                <input
                  type="text"
                  placeholder='Your Name'
                  className='w-[25vw] p-[4px] border border-gray-500 rounded-xl'
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder='Your City'
                  className='w-[25vw] p-[4px] border border-gray-500 rounded-xl'
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder='Contact number'
                  className='w-[25vw] p-[4px] border border-gray-500 rounded-xl'
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder='Type your message here..'
                  className='w-[25vw] h-[10vh] p-[4px] border border-gray-500 rounded-xl'
                />
              </div>
              <button
                style={{ backgroundColor: '#6262dc' }}
                className='text-white p-[8px] border rounded-xl cursor-pointer'
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='w-2/3 lg:w-1/4 h-80 lg:absolute lg:top-8 lg:left-[20%] rounded-lg shadow-lg'
          style={{ backgroundColor: '#6262dc' }}
        >
          <div className='text-white flex flex-col items-center justify-center mt-5 gap-8'>
            <h2>Contact Us
              <div className='bg-white h-[1px] w-[100%]'></div>
            </h2>
            <div className='flex flex-wrap items-center justify-center'>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clipRule="evenodd" />
              </svg> India
            </div>
            <div className='flex flex-wrap items-center justify-center'>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
              </svg> +91 12349 56789
            </div>
            <div className='flex flex-wrap items-center justify-center'>
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
              </svg> hello@gmail.com
            </div>
            <div className='flex gap-4 items-center justify-center cursor-pointer'>
              <Link to="https://www.instagram.com/">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                </svg>
              </Link>

              <Link to="https://x.com/">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
              </Link>

              <Link to="https://www.linkedin.com">
              <svg className="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" /></svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
