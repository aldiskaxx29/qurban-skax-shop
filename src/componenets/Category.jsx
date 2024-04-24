import React from 'react'

const Category = () => {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <div className='col-span-1'>
        <div className='h-[200px] bg-slate-300 rounded-md'>
          <img className='w-full h-full object-cover' src="https://res.cloudinary.com/ddaztooxq/image/upload/v1713934246/Desain_tanpa_judul_8_hndbqd.png" alt="" />
        </div>
      </div>
      <div className='col-span-1'>
        <div className='h-[200px] bg-slate-300 rounded-md'>
          <img className='w-full h-full object-cover' src="https://res.cloudinary.com/ddaztooxq/image/upload/v1713934246/Desain_tanpa_judul_8_hndbqd.png" alt="" />
        </div>
      </div>
      <div className='col-span-1'>
        <div className='h-[200px] bg-slate-300 rounded-md'>
          <img className='w-full h-full object-cover' src="https://res.cloudinary.com/ddaztooxq/image/upload/v1713934246/Desain_tanpa_judul_8_hndbqd.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Category
