'use client'
import mapboxgl from 'mapbox-gl';

const initiateMap = (map) => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    const options = {
        container: map,
        style: 'mapbox://styles/mapbox/satellite-v9',
        projection: 'globe', 
        zoom: 1.5,
        center: [10, 0]
    }
    return new mapboxgl.Map(options)
}

export default initiateMap