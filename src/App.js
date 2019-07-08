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
    searchedPlaces: [],
    querySearch: '',
    selectedPlace: undefined,
    showingInfoWindow: false,
  }

  componentDidMount() {
    PlaceAPI.getAll()
      .then(places => this.setState({ places, searchedPlaces: places }))
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

  updateSearch = (query) => {
    this.setState(prevState => {
      const searchRegex = new RegExp(query, 'i');
      return { 
        querySearch: query,
        searchedPlaces: prevState.places.filter(place => !!place.name.match(searchRegex))
      }
    });
  }

  render() {
    return (
      <div className='app'>
        <header className='app-header'>
          <div className='site-logo'>
            <img src={logo} alt='Logo da Prefeitura de Embu das Artes' />
          </div>
        </header>

        <main className='app-main'>
          <Sidebar
            places={this.state.searchedPlaces}
            activatePlace={this.activatePlace}
            querySearch={this.state.querySearch}
            updateSearch={this.updateSearch}
          />
          <MapContainer
            places={this.state.searchedPlaces}
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
