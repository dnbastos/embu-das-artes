import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons'

class LocationList extends Component {
  state = {
    active: false
  }

  toogleList = () => {
    document.querySelector('.location-list').classList.toggle('is-open');
    this.setState(prevState => ({ active: !prevState.active }));
  }

  render() {
    return (
      <div className='location-list'>
        <button
          className='btn-circle open-location-list'
          onClick={this.toogleList}
        >
          {!this.state.active && ( <FontAwesomeIcon icon={faList} /> )}
          {this.state.active && ( <FontAwesomeIcon icon={faTimes} /> )}
        </button>
        <div className='location-list-container'>
          <header>
            <h2>Pontos de interesse:</h2>
            {/* <button
                className='btn-circle close-location-list'
                onClick={this.toogleList}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button> */}
          </header>
          <main>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </main>
        </div>

      </div>
    );
  }
}

export default LocationList;
