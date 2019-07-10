import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchway, faUtensils, faHotel } from '@fortawesome/free-solid-svg-icons'
import { type } from 'os';

class TypeSelector extends Component {

  setType = type => {
    this.props.setFilterType(type);
  }

  getIsActiveClass = type => {
    return this.props.activeType === type ? 'active' : '';
  }

  getTypeName = (type) => {
    switch(type) {
      case 'attraction': 
        return 'Pontos Turísticos';
      case 'restaurant': 
        return 'Restaurantes';
      case 'hotel': 
        return 'Hotéis';
      default: 
        return '';
    }
  }

  render() {
    return (
      <div className='type-selector'>
        <button
          aria-label={this.getTypeName('attraction')} title={this.getTypeName('attraction')}
          className={`type-button-selector btn attraction ${this.getIsActiveClass('attraction')}`}
          onClick={() => this.setType('attraction')}
        >
          <FontAwesomeIcon icon={faArchway} size='lg' />
        </button>
        <button
          aria-label={this.getTypeName('restaurant')} title={this.getTypeName('restaurant')}
          className={`type-button-selector btn restaurant ${this.getIsActiveClass('restaurant')}`}
          onClick={() => this.setType('restaurant')}
        >
          <FontAwesomeIcon icon={faUtensils} size='lg' />
        </button>
        <button
          aria-label={this.getTypeName('hotel')} title={this.getTypeName('hotel')}
          className={`type-button-selector btn hotel ${this.getIsActiveClass('hotel')}`}
          onClick={() => this.setType('hotel')}
        >
          <FontAwesomeIcon icon={faHotel} size='lg' />
        </button>
        <h3>{this.getTypeName(this.props.activeType)}</h3>
      </div>
    );
  }
}

export default TypeSelector;
