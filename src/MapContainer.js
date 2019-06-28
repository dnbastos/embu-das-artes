import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

const apiKey = 'AIzaSyC0LJxzJG83wmuruULMypSFxo6nypBS_bY';

class MapContainer extends Component {

  getLocations = (places) => (
    places.map(place => {
      const lat = place.geometry.location.lat;
      const lng = place.geometry.location.lng;
      return { lat, lng };
    })
  );

  displayMarkers = () => {
    const locations = this.getLocations(this.props.places);
    return locations.map((location, index) => (
      <Marker 
        key={index} 
        id={index} 
        position={location}
        onClick = {() => console.log("You clicked me!")}
      />
    ));
  }

render() {
  return (
    <div className='map-container'>
      <Map
        google={this.props.google}
        zoom={16}
        // style={mapStyles}
        initialCenter={{ lat: -23.6510251, lng: -46.8545333 }}
        disableDefaultUI={true}
      >
        {this.displayMarkers()}
      </Map>
    </div>
  );
}
}

export default GoogleApiWrapper({ apiKey })(MapContainer);
