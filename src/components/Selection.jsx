import React from 'react'
import bantayan from '../img/bantayan.png'
import bohol from '../img/bohol.png'
import boracay from '../img/boracay.png'
import elnido from '../img/elnido.png'
import malcapuya from '../img/malcapuya.png'
import moalboal from '../img/moalboal.png'
import puerto from '../img/puerto.png'
import SelectionCard from './SelectionCard'


function Selection() {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-6 grid md:grid-cols-3 gap-4'>
        <SelectionCard
            img = {bantayan}
            name = "Bantayan"
        />
        <SelectionCard
            img = {bohol}
            name = "Bohol"
        />
        <SelectionCard
            img = {boracay}
            name = "Boracay"
        />
        <SelectionCard
            img = {elnido}
            name = "Elnido"
        />
        <SelectionCard
            img = {malcapuya}
            name = "Malcapuya"
        />
        <SelectionCard
            img = {moalboal}
            name = "Moalboal"
        />
        <SelectionCard
            img = {puerto}
            name = "Puerto"
        />
        <SelectionCard
            img = {bantayan}
            name = "Bantayan"
        />
         <SelectionCard
            img = {elnido}
            name = "Baguio"
        />
       
        
        
    </div>
  )
}

export default Selection