'use client'
import React from 'react'
import Indicators from '../indicators'


const Welcome = (props) => {
    const { map } = props
     const flyTo = () => {
        map.flyTo({
            center: [38.7400, 9.0300],
            duration: 11000,
            zoom: 5,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
          
     }
  return (
    <div className='absolute bg-transparent text-white'>
        <div>
            Welcome to out page
        </div>
        
        <button type='button' onClick={flyTo}>
        <Indicators  bgprimary="bg-black" borderprimary="border-black"/>
        </button>
    </div>
  )
}

export default Welcome