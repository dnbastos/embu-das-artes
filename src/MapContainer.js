import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const apiKey = 'AIzaSyC0LJxzJG83wmuruULMypSFxo6nypBS_bY';

class MapContainer extends Component {

  state = {
    selectedPlace: {}
  };

  typeColor = {
    'Restaurant': 'ce2812',
    'Tourist Attraction': '00a650',
  }

  getPinImage = typeName =>
    `http://chart.googleapis.com/chart?chst=d_map_spin&chld=0.75|0|${this.typeColor[typeName]}|40|`;

  getLocation = place => {
    const lat = place.geometry.location.lat;
    const lng = place.geometry.location.lng;
    return { lat, lng };
  }

  displayMarkers = () => {
    const { places } = this.props;
    return places.map((place, i) => (
      <Marker
        key={i}
        id={'marker' + i}
        ref={(node) => { this['marker' + i] = node; }}
        position={this.getLocation(place)}
        icon={this.getPinImage(place.type)}
        onClick={() => {
          this.setState({ selectedPlace: place });
          this.props.handleActiveMarker(i);
        }}
      />
    ));
  }

  render() {
    return (
      <div className='map-container'>
        <Map
          google={this.props.google}
          zoom={16}
          initialCenter={{ lat: -23.6510251, lng: -46.8545333 }}
          disableDefaultUI={true}
        >
          {this.displayMarkers()}

          {/* <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow> */}
          <InfoWindow
            visible={true}
            position={({ lat: -23.6510251, lng: -46.8545333 })}>
            <div>
              <h1>Teste</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey })(MapContainer);
