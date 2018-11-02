import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow } from "react-google-maps";
import React from 'react';
import MyMarker from './MyMarker';

const MyMap = withScriptjs(withGoogleMap((props) => {

  const markers = props.locations.map (loc =>
    <MyMarker key={loc.name}
    name={loc.name}
    location= {{lat:loc.lat, lng: loc.lng }}
    photoId ={loc.photoId}
    imageUrl={props.returnImg(loc, props.collection)}
    description={loc.description}
    >
    {props.isOpen &&
      <InfoWindow onCloseClick={ props.toggle }>
        <div id="infowindow">Enter Content here</div>
      </InfoWindow> }
    </MyMarker>
  );

  return (
    <GoogleMap
      defaultZoom={13}
      center={{ lat: 41.160577, lng: -8.638517 }}
      locations={props.locations}
      collection={props.collection}
      returnImg={props.returnImg}
    >
    {markers}
    </GoogleMap>
  );
}
))

export default MyMap
