import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withGoogleMap((props) => {
  return(
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 41.1579, lng: -8.6291 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 41.140682, lng: -8.611876 }} />}
  </GoogleMap>
  )
});

export default MyMapComponent
