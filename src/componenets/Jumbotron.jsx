import React from 'react'

const Jumbotron = () => {
  return (
    <div className='bg-green-200 rounded-md h-[400px] items-center flex'>
      <div className='pl-16 space-y-2'>
        <p className='text-4xl'>Stay home & get your daily <br/> needs from our shop</p>
        <span>Start You'r Daily Shopping with Nest Mart</span>
        <div className='flex flex-row'>
          <input type="text" className='p-3 rounded-l-md outline-green-300' placeholder='Enter' />
          <button type='button' className='p-3 rounded-r-md bg-green-500 text-white'>Subriber</button>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
