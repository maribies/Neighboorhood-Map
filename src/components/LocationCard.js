import React from 'react';

const LocationCard = ({location, collection, imageUrl, photographer})=> {
  return (
  <div className="location-info">
    <h4 className="info-title">{location.name}</h4>
    <img src={imageUrl} alt={location.name}/>
    <p className="thumb-desc">{location.description}</p>
    <small>Photo by {photographer} on Unsplash</small>
  </div>
  )
}

export default LocationCard
