import React from 'react'

const Card = ({left = false, title, menu}) => {
  console.log(left,title, menu);
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <p className='text-2xl font-bold'>{title}</p>
        <ul className='flex space-x-3'>
          {menu.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>

          {left ? 
            <div className=''>
              <div className='grid grid-cols-6 gap-2'>
                <div className='col-span-2'>
                  <div className='h-[300px] bg-slate-300 rounded-md'></div>
                </div>
                <div className='col-span-1'>
                  <div className='h-[300px] bg-slate-300 rounded-md'></div>
                </div>
                <div className='col-span-1'>
                  <div className='h-[300px] bg-slate-300 rounded-md'></div>
                </div>
                <div className='col-span-1'>
                  <div className='h-[300px] bg-slate-300 rounded-md'></div>
                </div>
                <div className='col-span-1'>
                  <div className='h-[300px] bg-slate-300 rounded-md'></div>
                </div>
              </div>
            </div>
          : 
            <div className='grid grid-cols-5 gap-2'>
              <div className='col-span-1'>
                <div className='h-[300px] bg-slate-300 rounded-md'></div>
              </div>
              <div className='col-span-1'>
                <div className='h-[300px] bg-slate-300 rounded-md'></div>
              </div>
              <div className='col-span-1'>
                <div className='h-[300px] bg-slate-300 rounded-md'></div>
              </div>
              <div className='col-span-1'>
                <div className='h-[300px] bg-slate-300 rounded-md'></div>
              </div>
              <div className='col-span-1'>
                <div className='h-[300px] bg-slate-300 rounded-md'></div>
              </div>
            </div>
          }
    </div>
  )
}

export default Card
