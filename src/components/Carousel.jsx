import React from 'react'
import SliderData from '../components/SliderData'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import bantayan from '../img/bantayan.png'
import { useState } from 'react';




function Carousel() {
    
    const [slide, setSlide] = useState(0);
    const sliderLength = SliderData.length;

    const prevSlide = () => {
        setSlide(slide === sliderLength - 1 ? 0 : slide + 1 );
    };
    const NextSlide = () => {
        setSlide(slide === 0 ? sliderLength - 1 : slide - 1 );
    };
    

  return (
    <div id='views' className='max-w-[1240px] flex items-center justify-center   mx-auto px-4 py-10 relative' >
        <BsArrowLeftSquareFill onClick={prevSlide} size={40} style={{color:"white"}} className='absolute top-[50%] left-10'/>
        <BsArrowRightSquareFill onClick={ NextSlide} size={40} style={{color:"white"}}  className='absolute right-10 top-[50%]'/>
       

       {SliderData.map((item,index) => (
           <div className={index === slide ? "opacity-100 w-full h-full" : "opacity-0"}>
                {
                    index === slide && (
                        <img 
                        id={index}
                        className='w-full  rounded-lg object-cover'
                        src={item.url} alt='/' />
                    )
                }
            
           </div>
       ))}
    </div>
  )
} 

export default Carousel