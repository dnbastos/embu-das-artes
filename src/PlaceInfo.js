import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class PlaceInfo extends Component {

  render() {
    const { selectedPlace: place } = this.props;
    if (!place) return (<div></div>);
    return (
      <div className={`place-info`}>
        <h2>{place.name}</h2>
        <h3>Endereço:</h3>
        {place.formatted_address.split('\n').map((text, i) => <p key={i}>{text}</p>)}
        <button 
          className='close-place-info btn-circle'
          onClick={() => this.props.disablePlace()}>
          <FontAwesomeIcon icon={faTimes}/>
        </button>
      </div>
    );
  }

}

export default PlaceInfo;
