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
    filterType: '',
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

  updateSearch = querySearch => {
    this.setState({ querySearch });
    this.disablePlace();
  }

  setFilterType = filterType => {
    this.setState({ filterType });
    this.disablePlace();
  }

  clearSearch = () => {
    this.setState({ filterType: '', querySearch: '' });
  }

  filterByQuery = places => {
    const searchRegex = new RegExp(this.state.querySearch, 'i');
    return places.filter(place => !!place.name.match(searchRegex))
  }

  filterByType = places => {
    const filterType = this.state.filterType;
    return !!filterType ? places.filter(place => place.type === filterType) : places;
  }

  render() {
    let searchedPlaces = this.state.places;
    searchedPlaces = this.filterByQuery(searchedPlaces);
    searchedPlaces = this.filterByType(searchedPlaces);

    return (
      <div className='app'>
        <header className='app-header'>
          <div className='site-logo'>
            <img src={logo} alt='Logo da Prefeitura de Embu das Artes' />
          </div>
        </header>

        <main className='app-main'>
          <Sidebar
            places={searchedPlaces}
            activatePlace={this.activatePlace}
            querySearch={this.state.querySearch}
            updateSearch={this.updateSearch}
            activeType={this.state.filterType}
            setFilterType={this.setFilterType}
            clearSearch={this.clearSearch}
          />
          <MapContainer
            places={searchedPlaces}
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
