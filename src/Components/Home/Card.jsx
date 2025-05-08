import React from 'react';
import { Link } from 'react-router-dom';

function Card({ image, children }) {
  return (
    <div className="w-[250px] h-[250px] rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
 
      <div className="h-3/4 w-full">
        <img
          src={image}
          alt="Card"
          className="w-full h-full object-contain"
        />
      </div>


      <Link to="/plant" className="h-1/4 w-full text-gray-700 p-2 hover:text-gray-900 flex items-center justify-center">
        {children}
      </Link>
    </div>
  );
}

export default Card;
