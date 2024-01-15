import React from 'react'
import Logo from '../img/logo.png'
import Logob from '../img/logob.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-scroll'


function Navbar() {

    const [nav,setNav] = useState(false);
    const [logo,setLogo] = useState(false);


    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }


  return (
    <div className='w-full text-white 
    px-4 flex justify-between items-center h-14
    absolute bg-teal-900 bg-opacity-20 z-10'>
       <img onClick={handleNav} className="w-40" src={Logo} alt='/'></img>

       <ul className='hidden md:flex  gap-10 '> 
            <li>
            <Link to="/" spy={true} smooth={true} offset={50} duration={500} > Home</Link>
            </li>
            <li> <Link to="destination" spy={true} smooth={true} offset={20} duration={500} > Destination </Link></li>
            <li><Link to="travel" spy={true} smooth={true} offset={-55} duration={500} > Travel </Link></li>
            <li><Link to="views" spy={true} smooth={true} offset={80} duration={500} > Views </Link></li>
       </ul>

       <div onClick={handleNav} className='absolute right-5 md:hidden z-10'>
        {nav ? <AiOutlineClose color='black' size={20}/> : <AiOutlineMenu size={20}/> }
       </div>

       <div onClick={handleNav} className={nav ? 'fixed  bg-gray-100/90 text-black top-0 left-0 w-full h-full p-4 md:hidden' : 'absolute left-[-100%]'}>
            <img className="absolute top-1 w-40 mb-16" src={Logob} alt='/'></img>
            <ul className='flex flex-col gap-10 pr-10 mt-20'> 
                <li className='p-4 border-b border-black rounded-xl hover:bg-slate-400'>Home</li>
                <li className='p-4 border-b border-black rounded-xl hover:bg-slate-400'>Destinations</li>
                <li className='p-4 border-b border-black rounded-xl hover:bg-slate-400'>Travel</li>
                <li className='p-4 border-b border-black rounded-xl hover:bg-slate-400'>Views</li>
            </ul>   

       </div>


    </div>
  )
}

export default Navbar