import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCaretRight } from '@fortawesome/free-solid-svg-icons'

class PlaceList extends Component {
  
  selectPlace = place => {

  }

  render() {
    const { places } = this.props;
    return (
      <ul className='places-list'>
        {places.map((place, i) => (
          <li key={i} tabIndex='0' onClick={this.selectPlace(place)}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='places-list-icon pull-left' />
            {place.name}
            <FontAwesomeIcon icon={faCaretRight} size="lg" className='places-list-icon pull-right'/>
          </li>
        ))}
        <button onClick={() => {
        this.setState({
            activeMarker: this.refs.marker1.marker,
            showingInfoWindow: true
          })
      }}>testtt</button>
      </ul>
    );
  }
}

export default PlaceList
