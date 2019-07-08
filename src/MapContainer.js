import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import styles from './styles/scss/variables.scss';

const apiKey = 'AIzaSyC0LJxzJG83wmuruULMypSFxo6nypBS_bY';

class MapContainer extends Component {

  mapZoom = 17;

  geTypeColor = typeName => {
    const colorFormat = cssColor => cssColor.replace('#', '');
    switch (typeName) {
      case 'Restaurant':
        return colorFormat(styles.restaurantColor);
      case 'Tourist Attraction':
        return colorFormat(styles.attractionColor);
      case 'Hotel':
        return colorFormat(styles.hotelColor);
      default:
        return colorFormat(styles.defaultTypeColor);
    }
  }

  handleMapReady = (mapProps, map) => {
    this.map = map;
    map.addListener('zoom_changed', () => {
      this.mapZoom = map.getZoom();
    });
  };

  getPinImage = typeName =>
    `http://chart.googleapis.com/chart?chst=d_map_spin&chld=0.75|0|${this.geTypeColor(typeName)}|40|`;

  getLocation = place => {
    if (!place || !place.geometry) return { lat: 0, lng: 0 };
    const lat = place.geometry.location.lat;
    const lng = place.geometry.location.lng;
    return { lat, lng };
  }

  getInfoWindowLocation = place => {
    const location = this.getLocation(place);
    const distance = Math.pow(32, 3) * 1 / Math.pow(2, this.mapZoom - 1) / 1000;
    location.lat += distance;
    return location;
  }

  render() {
    const { places, google, activatePlace, selectedPlace, showingInfoWindow } = this.props;
    const classSelectedPlace = !!selectedPlace ? 'selected-place' : '';
    return (
      <div className={`map-container ${classSelectedPlace}`}>
        <Map
          google={google}
          zoom={this.mapZoom}
          onReady={this.handleMapReady}
          initialCenter={{lat: -23.6498325, lng: -46.8526695}}
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
