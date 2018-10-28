import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow } from "react-google-maps";
import React from 'react';
import MyMarker from './MyMarker';

const MyMap = withScriptjs(withGoogleMap((props) => {

  console.log('props', props)
  console.log('prop', props.isOpen)

  const markers = props.locations.map (loc =>
    <MyMarker key={loc.name}
    name={loc.name}
    location= {{lat:loc.lat, lng: loc.lng }}
    >
    {props.isOpen &&
      <InfoWindow onCloseClick={ props.toggle }>
        <div id="infowindow">Enter Content here</div>
      </InfoWindow> }
    </MyMarker>
  );

  return (
    <GoogleMap
      defaultZoom={12}
      center={{ lat: 41.1579, lng: -8.6291 }}
      locations={props.locations}
    >
    {markers}
    </GoogleMap>
  );
}
))


export default MyMap
