import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class PlaceInfo extends Component {

  getClassType = typeName => {
    switch (typeName) {
      case 'Restaurant':
        return 'restaurant';
      case 'Tourist Attraction':
        return 'attraction';
      case 'Hotel':
        return 'hotel';
      default:
        return '';
    }
  }

  render() {
    const { selectedPlace: place } = this.props;
    const placeImage = place ? require(`./images/places/${place.image}`) : '#';
    if (!place) return (<div></div>);
    return (
      <div className={`place-info ${this.getClassType(place.type)}`}>
        <div role='img' aria-label={place.name}
          className="place-info-image" style={{ backgroundImage: `url(${placeImage})` }}
        />
        <div className="place-info-content">
          <button
            className='back-place-info btn-circle'
            onClick={() => this.props.disablePlace()}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2>{place.name}</h2>
          <h3>Endereço:</h3>
          {place.formatted_address.split('\n').map((text, i) => <p key={i}>{text}</p>)}
          <button
            className='close-place-info btn'
            onClick={() => this.props.disablePlace()}>
            Voltar aos Resultados
          </button>
        </div>
      </div>
    );
  }

}

export default PlaceInfo;
