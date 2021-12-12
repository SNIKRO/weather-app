import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import config from '../../config';


const mapApiKey = config.MAP_KEY.GOOGLE_MAP_KEY;

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
      googleMapsApiKey = {mapApiKey}
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