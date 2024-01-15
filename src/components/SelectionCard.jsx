import React from 'react'

function SelectionCard(props) {
  return (
    <div>
        <div className='relative'>           
            <img className='w-full h-full relative' src={props.img} alt='/'/>
            <div className='bg-black bg-opacity-10 w-full h-full absolute top-0 left-0'>
                <h2 className='absolute left-4 bottom-4 text-white'>{props.name}</h2>
            </div>
        </div>
    </div>
  )
}

export default SelectionCard