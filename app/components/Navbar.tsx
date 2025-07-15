import React from 'react'

import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <div className='w-full px-2 pt-2'>
        <div className='bg-primary h-28 flex flex-col rounded-2xl'>

          <div className='flex-1 text-5xl flex items-center justify-center p-4  pb-0 font-main text-secondary'>Aashish Raja</div>
          <div className='flex-1'><NavMenu/></div>

        </div>
    </div>
  )
}

export default Navbar
