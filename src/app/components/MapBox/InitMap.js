"use client";
import mapboxgl from "mapbox-gl";

const initiateMap = (map) => {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const options = {
    container: map,
    style: "mapbox://styles/mapbox/satellite-v9",
    projection: "globe",
    zoom: 2.3,
    center: [90, 0],
    dragPan: false, // Disable panning
    scrollZoom: false, // Disable zooming via scroll
    touchZoomRotate: false, // Disable zooming and rotating via touch gestures
    doubleClickZoom: false, // Disable zooming on double-click
    dragRotate: false, // Disable rotating via dragging
  };
  return new mapboxgl.Map(options);
};

export default initiateMap;
