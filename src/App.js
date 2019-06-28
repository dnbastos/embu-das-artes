import React, { Component } from 'react';
import logo from './images/logo-embu.jpg';
import myPlaces from './myPlaces.json';
import './styles/css/App.css';
import * as PlaceAPI from './PlacesAPI';
import Sidebar from './Sidebar';
import MapContainer from './MapContainer';
import { thisExpression } from '@babel/types';


class App extends Component {

  constructor(props) {
    super(props);
    this.markerRef = React.createRef();
  }

  state = {
    places: [],
    showingInfoWindow: false,
    activeMarker: {}
  }

  handleActiveMarker = placeId => {
    // this.setState({
    //   showingInfoWindow: true,
    //   activeMarker: this.mapContainer['marker' + placeId].getDOMNode()
    // });
    console.log(this.mapContainer);
  }

  componentDidMount() {
    // PlaceAPI.get(1).then(place => {
    //   console.log('place', place);
    // });

    PlaceAPI.getAll()
      .then(places => this.setState({ places }))
      .catch(error => console.log(error));

    console.log(this.mapContainer.map);
  }

  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <div className='site-logo'>
            <img src='http://192.168.2.178/intranet_desenv/assets/img/logos/logo.png' alt='Logo da Prefeitura de Embu das Artes' />
          </div>
        </header>

        <main className='app-main'>
          <Sidebar places={this.state.places}/>
          <MapContainer 
            ref={(node) => { this.mapContainer = node; }}
            places={this.state.places} 
            handleActiveMarker={this.handleActiveMarker}/>
          {/* <PlaceInfo /> */}
        </main>

        <footer className='app-footer'>
          Desenvolvido por <a href='https://github.com/dnbastos'>Daniel Bastos</a>
        </footer>
      </div>
    );
  }
}

export default App;
