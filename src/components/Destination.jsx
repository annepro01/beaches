import React from 'react'
import bantayan from '../img/bantayan.png'
import bohol from '../img/bohol.png'
import boracay from '../img/boracay.png'
import elnido from '../img/elnido.png'
import malcapuya from '../img/malcapuya.png'
import moalboal from '../img/moalboal.png'
import puerto from '../img/puerto.png'




function Destination() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-6 text-center mb-10' id='destination'>
        <h1> Beaches in Philippines </h1>
        <p className='mb-5'> Most favorite beaches in philippines</p>
        <div className='grid grid-rows-none md:grid-cols-5 gap-4'>
            <img className='h-full object-cover md:col-span-3 row-span-2 ' src={moalboal} alt='/'/>
            <img className=' h-full object-cover' src={bohol} alt='/'/>
            <img className=' h-full object-cover' src={boracay} alt='/'/>
            <img className=' h-full object-cover' src={elnido} alt='/'/>
            <img className=' h-full object-cover' src={malcapuya} alt='/'/>
            
        </div>
        
    </div>
  )
}

export default Destination