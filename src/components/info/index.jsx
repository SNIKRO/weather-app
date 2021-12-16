import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import config from '../../config';
//import urlib from 'urllib';

const mapApiKey = config.MAP_KEY.GOOGLE_MAP_KEY;

const map = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=${mapApiKey}`)

console.log(map);


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 54.9970835, lng: 73.3782025  
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey={mapApiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
