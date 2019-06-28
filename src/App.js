import React, { Component } from 'react';
import logo from './images/logo-embu.jpg';
import myPlaces from './myPlaces.json';
import './styles/css/App.css';
import * as PlaceAPI from './PlacesAPI';
import Sidebar from './Sidebar';
import MapContainer from './MapContainer';


class App extends Component {

  state = {
    places: []
  }

  componentDidMount() {
    // PlaceAPI.get(1).then(place => {
    //   console.log('place', place);
    // });

    PlaceAPI.getAll()
    .then(places => this.setState({ places }))
    .catch(error => console.log(error));
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
          <MapContainer places={this.state.places}/>
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
