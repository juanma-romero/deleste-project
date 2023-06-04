'use client'

import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'

const Map: React.FC = () => {
  
  return (
    <LoadScriptNext googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerClassName='w-100 h-96 rounded-xl mx-auto mt-12  '
        mapTypeId='satellite'
        center={{ lat: -25.510827 , lng: -54.611091 }}
        zoom={16}
      >
        <Marker position={{ lat: -25.510827, lng: -54.611091 }} />
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default Map;
