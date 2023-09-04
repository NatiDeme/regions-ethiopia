'use client'

import Welcome from "../welcomeComponent/Welcome";
import React, { useEffect, useRef, useState } from 'react'
import initiateMap from './InitMap';
// import mapboxgl from "mapbox-gl";

const MapBox = () => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null)
  let userInteracting = false;
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
    // Pause spinning on interaction
map.on('mousedown', () => {
  userInteracting = false;
  });
   
  // Restart spinning the globe when interaction is complete
  map.on('mouseup', () => {
  userInteracting = false;
  spinGlobe();
  });
   
  // These events account for cases where the mouse has moved
  // off the map, so 'mouseup' will not be fired.
  map.on('dragend', () => {
  userInteracting = false;
  spinGlobe();
  });
  map.on('pitchend', () => {
  userInteracting = false;
  spinGlobe();
  });
  map.on('rotateend', () => {
  userInteracting = false;
  spinGlobe();
  });
     map.on('style.load', () => {
      map.setFog({});
      });   

    map.on('moveend', () => {
      spinGlobe();
      });
      spinGlobe()
    }

  }, [map])
   



  return (
    <>
    <Welcome map={map} />
    <div ref={mapContainerRef} className='w-full h-screen relative'>
    </div>
    </>
  
    
  )
}

export default MapBox;