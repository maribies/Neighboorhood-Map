import React from 'react';

const LocationCard = ({location, collection, imageUrl, photographer, isOpen})=> {
  return (
  <div className="location-info">
    <h4 className="info-title">{location.name}</h4>
    <img src={imageUrl} alt={location.name}/>
    <p className="thumb-desc">{location.description}</p>
    {/* the below ternary checks to see if the marker is open and thus doesn't show the attribution for the infowindow, but shows for the filtered listing*/}
    {isOpen ?
     null : <small>Photo by {photographer} on Unsplash</small>}
  </div>
  )
}

export default LocationCard
