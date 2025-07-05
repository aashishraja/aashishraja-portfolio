import React from 'react'

import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <div className='w-full bg-amber-400 p-2'>
        <div className='bg-blue-500 h-28 flex flex-col rounded-2xl'>

          <div className='bg-amber-600 flex-1 text-4xl flex items-center justify-center p-4'>Aashish Raja</div>
          <div className='bg-cyan-600 flex-1'><NavMenu/></div>

        </div>
    </div>
  )
}

export default Navbar
