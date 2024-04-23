import React, { useState } from 'react'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className='relative w-full'>
      <div className='flex flex-row justify-between bg-slate-300 p-5 rounded-md space-x-2'>
      <div className='bg-red-300'>
        LOGO
      </div>
      <div className='sm:flex sm:justify-end hidden'>
        <ul className='flex space-x-5'>
          <li className='cursor-pointer hover:border-b hover:border-green-600'>Home</li>
          <li className='cursor-pointer hover:border-b hover:border-green-600'>Shop</li>
          <li className='cursor-pointer hover:border-b hover:border-green-600'>Blog</li>
          <li className='cursor-pointer hover:border-b hover:border-green-600'>Contact</li>
        </ul>
      </div>
      <div className='flex-1 justify-end md:hidden'>
        <div className='float-right'>
          {open ?
           <IoMdMenu size={35} onClick={() => setOpen(!open)} className=''/>
           :
           <IoMdClose size={35} onClick={() => setOpen(!open)} className=''/>
          }
        </div>
      </div>
      <div>
        <span className='text-sm hidden md:block'>+62 877-0153-6399</span>
      </div>
    </div>

    <div className={`h-[240px] rounded-2xl absolute inset-0  top-20 z-40  bg-red-200 transition duration-700 ease-in-out ${open ? 'hidden' : 'block'}`}>
      <div className='p-5'>
        <ul className='flex flex-col  space-y-5'>
          <li className='cursor-pointer hover:border-b hover:slate-100'>Home</li>
          <li className='cursor-pointer hover:border-b hover:slate-100'>Shop</li>
          <li className='cursor-pointer hover:border-b hover:slate-100'>Blog</li>
          <li className='cursor-pointer hover:border-b hover:slate-100'>Contact</li>
          <span className='text-sm'>+62 877-0153-6399</span>
        </ul>
      </div>
    </div>

    </div>
  )
}

export default Navbar
