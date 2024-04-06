import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between bg-slate-300 p-5 rounded-md'>
      <div>
        LOGO
      </div>
      <div className=''>
        <ul className='flex space-x-4'>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <span>+62 877-0153-6399</span>
      </div>
    </div>
  )
}

export default Navbar
