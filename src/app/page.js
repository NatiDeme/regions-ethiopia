import MapBox from "./components/MapBox/MapBox";
import Indicators from "./components/indicators";
import Welcome from "./components/welcomeComponent/Welcome";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function Home() {
  return (
    <>
      <MapBox></MapBox>
    </>
  );
}
