import { compose, withStateHandlers } from 'recompose';
import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const MyMapComponent = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 41.1579, lng: -8.6291 }}
  >
  <Marker
    position={{ lat: 41.140682, lng: -8.611876 }}
    onClick={ props.onToggleOpen }
  >
    {props.isOpen &&
      <InfoWindow onCloseClick={ props.onToggleOpen }>
        { <div id="infowindow"><p>Ribiera</p></div> }
      </InfoWindow>
    }
  </Marker>
  </GoogleMap>

);

export default MyMapComponent
