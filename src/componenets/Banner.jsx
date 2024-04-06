import React from 'react'

const Banner = () => {
  return (
    <div className='grid grid-cols-3 gap-2'>
      <div className='col-span-2'>
        <div className='w-full h-[500px] rounded-md bg-slate-300'></div>
      </div>    
      <div className='col-1'>
        <div className='w-full h-[500px] rounded-md bg-slate-300'></div>
      </div>    
    </div>
  )
}

export default Banner
