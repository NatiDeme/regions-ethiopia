'use client'
import React from 'react'
import Indicators from '../indicators'
import hello from '../../../../public/ethiopia.geojson'

const Welcome = (props) => {
    const { map } = props
     const flyTo = () => {
        map.flyTo({
            center: [38.7400, 9.0300],
            duration: 10000,
            zoom: 5,
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });
            map.addSource('me',{
              'type': 'geojson',
              'data': hello
            })
            map.addLayer({
              'id': 'me', 
              'type': 'line',
              'source': 'me', 
              'layout': {},
              'paint': {
                'line-color': '#000',
                'line-width': 1
              }
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