import React from 'react'
import Video from '../img/beachvideo.mp4'
import {BsSearch} from 'react-icons/bs'

function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <video 
        className='w-full h-full object-cover'
        loop
        muted
        autoPlay
        src={Video}/>

        <div className='absolute top-0 w-full h-full bg-gray-900/30'></div>
   
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
            <h1 className='font-bold'>Philippine Beaches</h1>
            <p>According to surveys best beaches in Philippines</p>
                <form className='max-w-[800px] w-full flex justify-center items-center border text-white  p-1 rounded-md bg-gray-100/90s'>
                    <div>
                        <input 
                        className='text-white bg-transparent 
                        sm:w-[400px] focus:outline-none'
                        type='text'
                        placeholder='Search'></input>
                    </div>
                    <div>
                        <BsSearch size={20} className='icon' />
                    </div>
                </form>
        </div>
   
    </div>
  )
}

export default Hero