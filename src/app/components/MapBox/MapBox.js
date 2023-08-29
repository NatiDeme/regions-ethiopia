'use client'

import Welcome from "../welcomeComponent/Welcome";
import React, { useEffect, useRef, useState } from 'react'
import initiateMap from './InitMap';
// import mapboxgl from "mapbox-gl";

import MapboxDraw from '@mapbox/mapbox-gl-draw';

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
      // const el = document.createElement('div');
      // el.className = 'marker';
      // el.textContent = 'Marker';
      // new mapboxgl.Marker(el)
      //   .setLngLat([45.32020449585431, 7.4976905845339985])
      //   .addTo(map);
        const draw = new MapboxDraw({
          displayControlsDefault: false,
          controls: {
            point: true,
            trash: true,
          },
        });
        
        map.addControl(draw);
    
        map.on('draw.create', (event) => {
          // Handle marker creation event
          const coordinates =[45.32020449585431, 7.4976905845339985];
          // console.log('Marker created at:', coordinates);
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
    <div ref={mapContainerRef} className='w-full h-screen'>
     <Welcome map={map}/>
    </div>
  )
}

export default MapBox;