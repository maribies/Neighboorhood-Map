import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import React from 'react';
import MyMarker from './MyMarker';

const MyMap = withScriptjs(withGoogleMap((props) => {

  return (
    <GoogleMap
      defaultZoom={12}
      center={{ lat: 41.1579, lng: -8.6291 }}
    />
  );
}
))


export default MyMap
