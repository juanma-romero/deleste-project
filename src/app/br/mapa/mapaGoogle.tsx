'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map: React.FC = () => {
  
  return (
    <LoadScript googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}>
      <GoogleMap
        mapContainerClassName='w-4/5 h-4/6 rounded-xl mx-auto'
        mapTypeId='satellite'
        center={{ lat: -25.510827 , lng: -54.611091 }}
        zoom={16}
      >
        <Marker position={{ lat: -25.510827, lng: -54.611091 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
