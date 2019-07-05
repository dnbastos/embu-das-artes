import React, { Component } from 'react';
import logo from './images/logo-embu.jpg';
import './styles/css/App.css';
import * as PlaceAPI from './PlacesAPI';
import Sidebar from './Sidebar';
import MapContainer from './MapContainer';
import PlaceInfo from './PlaceInfo';

class App extends Component {

  state = {
    places: [],
    selectedPlace: undefined,
    showingInfoWindow: false
  }

  componentDidMount() {
    PlaceAPI.getAll()
      .then(places => this.setState({ places }))
      .catch(error => console.log(error));
  }

  activatePlace = place => {
    this.setState({
      selectedPlace: place,
      showingInfoWindow: true
    });
  }

  disablePlace = () => {
    this.setState({
      selectedPlace: undefined,
      showingInfoWindow: false
    });
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
          <Sidebar
            places={this.state.places}
            activatePlace={this.activatePlace}
          />
          <MapContainer
            places={this.state.places}
            activatePlace={this.activatePlace}
            selectedPlace={this.state.selectedPlace}
            showingInfoWindow={this.state.showingInfoWindow}
          />
          <PlaceInfo 
            selectedPlace={this.state.selectedPlace}
            disablePlace={this.disablePlace}
          />
        </main>

        <footer className='app-footer'>
          Desenvolvido por <a href='https://github.com/dnbastos'>Daniel Bastos</a>
        </footer>
      </div>
    );
  }
}

export default App;
