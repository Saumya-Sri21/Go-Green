import React from 'react'
import logo from '../../assets/leaf.svg'


function Logo({width=30,height=30}) {
  return (
    <div className='text-slate-800 font-bold'>
      <img src={logo} alt="" width={width} height={height}  />
    </div>
  )
}

export default Logo
