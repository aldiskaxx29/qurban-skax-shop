import React from 'react'
import Slider from 'react-slick'
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };


  function NextArrow (props){
    const {className, style, onClick} = props;
    return (
      <div
      className="absolute z-10 flex items-center bottom-[240px] left-4 cursor-pointer"
      // style={{ ...style, display: "block", background: "", margin: '0 0 0 70px', position: 'absolute', zIndex: 1, width: '100px' }}
      onClick={onClick}
    >
      <BsArrowLeftCircle size={30}/>
    </div>
    )
  }

  function PrevArrow (props){
    const {className, style, onClick} = props;
    return (
      <div
      className="absolute z-10 flex items-center bottom-[240px]  right-4 cursor-pointer"
      // style={{ ...style, display: "block", background: "", margin: '0 0 0 70px', position: 'absolute', zIndex: 1, width: '100px' }}
      onClick={onClick}
    >
      <BsArrowRightCircle size={30}/>
    </div>
    )
  }


  return (
    <div className='grid grid-cols-3 gap-2'>
      <div className='col-span-3 md:col-span-2'>
        <div className='slider-container'>
          <Slider {...settings}>
            <div className='w-full h-[500px] rounded-md bg-slate-300'>1</div>
            <div className='w-full h-[500px] rounded-md bg-slate-300'>2</div>
            <div className='w-full h-[500px] rounded-md bg-slate-300'>3</div>
            <div className='w-full h-[500px] rounded-md bg-slate-300'>4</div>
          </Slider>
        </div>
      </div>    
      <div className='col-span-1 hidden md:block'>
        <div className='w-full h-[500px] rounded-md bg-slate-300'></div>
      </div>    
    </div>
  )
}

export default Banner
