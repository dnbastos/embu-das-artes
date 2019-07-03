import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const apiKey = 'AIzaSyC0LJxzJG83wmuruULMypSFxo6nypBS_bY';

class MapContainer extends Component {

  typeColor = {
    'Restaurant': 'ce2812',
    'Tourist Attraction': '00a650',
  }

  getPinImage = typeName =>
    `http://chart.googleapis.com/chart?chst=d_map_spin&chld=0.75|0|${this.typeColor[typeName]}|40|`;

  getLocation = place => {
    if (!place || !place.geometry) return { lat: 0, lng: 0 };
    const lat = place.geometry.location.lat;
    const lng = place.geometry.location.lng;
    return { lat, lng };
  }

  getInfoWindowLocation = place => {
    const location = this.getLocation(place);
    location.lat += 0.001;
    return location;
  }

  render() {
    const { places, google, activatePlace, selectedPlace, showingInfoWindow } = this.props;
    return (
      <div className='map-container'>
        {console.log(google)}
        <Map
          google={google}
          zoom={16}
          maxZoom={16}
          minZoom={16}
          initialCenter={{ lat: -23.6510251, lng: -46.8545333 }}
          zoomControl={false}
          disableDefaultUI={true}
        >
          {places.map((place, i) => (
            <Marker
              key={i}
              selectedPlace={place}
              position={this.getLocation(place)}
              icon={this.getPinImage(place.type)}
              onClick={() => activatePlace(place)}
            />
          ))}
          <InfoWindow
            position={this.getInfoWindowLocation(selectedPlace)}
            visible={showingInfoWindow}>
            <div>
              {selectedPlace && (
                <h1>{selectedPlace.name}</h1>
              )}
            </div>
          </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey })(MapContainer);
