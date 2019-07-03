import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCaretRight } from '@fortawesome/free-solid-svg-icons'

class PlaceList extends Component {
  
  selectPlace = place => {
    const { activatePlace, toogleList } = this.props;
    activatePlace(place);
    toogleList();
  }

  render() {
    const { places } = this.props;
    return (
      <ul className='places-list'>
        {places.map((place, i) => (
          <li key={i} tabIndex='0' onClick={() => this.selectPlace(place)}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className='places-list-icon pull-left' />
            {place.name}
            <FontAwesomeIcon icon={faCaretRight} size="lg" className='places-list-icon pull-right'/>
          </li>
        ))}
      </ul>
    );
  }
}

export default PlaceList
