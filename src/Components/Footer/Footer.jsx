import React from 'react'
import Logo from '../Header/Logo'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="w-full h-[80px] bottom-0 bg-gray-900 text-white relative">
      

      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Logo width={50} height={50} />
      </div>


      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="text-[18px] font-semibold">You Can Find Us at</div>

        <div className="flex items-center justify-center gap-6 mt-1">

          <Link to="https://www.instagram.com/" target="_blank">
            <svg className="w-7 h-7 text-white hover:text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
            </svg>
          </Link>


          <Link to="https://x.com/" target="_blank">
            <svg className="w-6 h-6 text-white hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
            </svg>
          </Link>


          <Link to="https://www.linkedin.com" target="_blank">
            <svg className="w-7 h-7 text-white hover:text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
            </svg>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Footer
