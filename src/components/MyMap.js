import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow } from "react-google-maps";
import React from 'react';
import MyMarker from './MyMarker';

const MyMap = withScriptjs(withGoogleMap((props) => {

  let filtered
   if (props.tag === null) {
    filtered = props.locations
  } else if (props.tag === "All") {
    filtered = props.locations
  } else if (props.tag !== null) {
    filtered = props.locations.filter(location => location.tags.find(loctag => loctag === props.tag))
  }

  const markers = filtered.map (location =>
    <MyMarker key={location.name}
    coords= {{lat:location.lat, lng: location.lng }}
    location={location}
    imageUrl={props.returnImg(location, props.collection)}
    collection={props.collection}
    defaultAnimation={() => this.Animation.BOUNCE}
    >
    {props.isOpen &&
      <InfoWindow onCloseClick={ props.toggle }>
        <div id="infowindow">Enter Content here</div>
      </InfoWindow> }
    </MyMarker>
  );

  return (
    <GoogleMap
      aria-label="map"
      center={{ lat: 41.160577, lng: -8.638517 }}
      defaultZoom={13}
      locations={props.locations}
      collection={props.collection}
      returnImg={props.returnImg}
      role="application"
      updateFilter={props.updateFilter}
      tag={props.tag}
    >
    {markers}
    </GoogleMap>
  );
}
))

export default MyMap
