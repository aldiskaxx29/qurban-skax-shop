import React from 'react'

const Footer = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
        <div className='col-span-1'>
          <div className='p-4 rounded-md h-[200px] bg-slate-300'>
            <p>LOGO</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='p-4 rounded-md h-[200px] bg-slate-300'>
            <p>Company</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='p-4 rounded-md h-[200px] bg-slate-300'>
            <p>Account</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div className='col-span-1'>
          <div className='p-4 rounded-md h-[200px] bg-slate-300'>
            <p>Corporate</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-3 py-3 border-t-green-400'>
        <div className='col-span-3 md:col-span-1 text-center md:text-left'>
          <div className='p-4 rounded-md '>
            <p className='text-[12px] md:text-[14px]'>©2024 QurbanAldiSkax</p>
          </div>
        </div>
        <div className='col-span-1 hidden md:block'>
          <div className='p-4 rounded-md  text-center'>
            <p>+62 877-0153-6399</p>
          </div>
        </div>
        <div className='col-span-1 hidden md:block'>
          <div className='p-4 rounded-md text-right'>
            <p>Follow Us</p>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
