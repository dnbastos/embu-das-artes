import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCaretRight } from '@fortawesome/free-solid-svg-icons'

class PlaceList extends Component {
  
  selectPlace = place => {
    const { activatePlace, toogleList } = this.props;
    activatePlace(place);
    toogleList();
  }

  getClassType = typeName => {
    switch(typeName){
      case 'Restaurant':
        return 'restaurant';
      case 'Tourist Attraction':
          return 'attraction';
      default:
        return '';
    }
  }

  render() {
    const { places } = this.props;
    return (
      <ul className='places-list'>
        {places.map((place, i) => (
          <li key={i} tabIndex='0' onClick={() => this.selectPlace(place)} className={this.getClassType(place.type)}>
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
