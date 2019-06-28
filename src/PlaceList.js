import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class PlaceList extends Component {
  render() {
    const { places } = this.props;
    return (
      <ul className='places-list'>
        {places.map((place, i) => (
          <li key={i}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='places-list-icon' />
            {place.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default PlaceList
