import React from 'react'
import Slider from "react-slick";

const Card = ({left = false, title, menu}) => {
  console.log(left,title, menu);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div>
      <div className='flex flex-row justify-between'>
        <p className='md:text-2xl font-bold text-sm'>{title}</p>
        <ul className='flex space-x-3  items-center justify-end w-full'>
          {menu.map((item, index) => (
            <li key={index} className='text-[9px]'>{item.name}</li>
          ))}
        </ul>
      </div>

          {left ? 
            <div className=''>
              <div className='grid grid-cols-6 gap-2'>
                <div className='col-span-2'>
                  <div className='h-[300px] bg-slate-300 rounded-md'></div>
                </div>
                <div className='col-span-4'>
                  {/* <div className="slider-container" > */}
                    <Slider {...settings2} >
                      <div className='col-span-1 px-2' style={{ padding: '0 10px' }}>
                        <div className='h-[300px] w-full  bg-slate-300 rounded-md'></div>
                      </div>
                      <div className='col-span-1 px-2' style={{ padding: '0 10px' }}>
                        <div className='h-[300px]  bg-slate-300 rounded-md'></div>
                      </div>
                      <div className='col-span-1 px-2' style={{ padding: '0 10px' }}>
                        <div className='h-[300px]  bg-slate-300 rounded-md'></div>
                      </div>
                      <div className='col-span-1 px-2' style={{ padding: '0 10px' }}>
                        <div className='h-[300px]  bg-slate-300 rounded-md'></div>
                      </div>
                      <div className='col-span-1 px-2' style={{ padding: '0 10px' }}>
                        <div className='h-[300px]  bg-slate-300 rounded-md'></div>
                      </div>
                    </Slider>
                  {/* </div> */}
                </div>
              </div>
            </div>
          : 
            <div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
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
