'use client'

import Welcome from "../welcomeComponent/Welcome";
import React, { useEffect, useRef, useState } from 'react'
import initiateMap from './InitMap';
import hello from '../../../../public/ethiopia.geojson'

const MapBox = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null)

  useEffect(()=>{
    setMap(initiateMap(mapContainerRef.current)) 
  },[])

  const spinGlobe = () => {
    const secondsPerRevolution = 120;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;

    let userInteracting = false;
    let spinEnabled = true;

      const zoom = map.getZoom();
    if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
    let distancePerSecond = 360 / secondsPerRevolution;
    if (zoom > slowSpinZoom) {
    const zoomDif =
    (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
    distancePerSecond *= zoomDif;
    }
    const center = map.getCenter();
    center.lng -= distancePerSecond;
    map.easeTo({ center, duration: 1000, easing: (n) => n });
    }
  }

  useEffect(() => {
    if(map) {
     map.on('style.load', () => {
      map.setFog({});
      });

       map.on('load', () => {
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
      })
    
    map.on('moveend', () => {
      spinGlobe();
      });
      spinGlobe()
    }

  }, [map])
   



  return (
    <div ref={mapContainerRef} className='w-full h-screen absolute'>
     <Welcome map={map}/>
    </div>
  )
}

export default MapBox;