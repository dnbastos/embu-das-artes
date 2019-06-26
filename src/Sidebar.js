import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTimes, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
  state = {
    active: false
  }

  toogleList = () => {
    document.querySelector('.app-sidebar').classList.toggle('is-open');
    this.setState(prevState => ({ active: !prevState.active }));
  }

  render() {
    return (
      <div className='app-sidebar'>
          <button
            className='btn-circle btn-toggle-sidebar'
            onClick={this.toogleList}
            aria-hidden='true'
          >
            {!this.state.active && (<FontAwesomeIcon icon={faList} />)}
            {this.state.active && (<FontAwesomeIcon icon={faTimes} />)}
          </button>
          <header className='app-sidebar-header'>
            <h2>Pontos de interesse</h2>
          </header>
          <main>
            <form action='#' className='form-search'>
              <input className="input-control input-search" type='text' placeholder='Filtrar resultados' aria-label='Filtrar resultados' />
              <FontAwesomeIcon icon={faSearch} className='search-icon' />
            </form>
            
            <ul className='places-list'>
              <li> 
                <FontAwesomeIcon icon={faMapMarkerAlt} className='places-list-icon' /> 1
              </li>
              <li> 
                <FontAwesomeIcon icon={faMapMarkerAlt} className='places-list-icon' /> 2
              </li>
              <li> 
                <FontAwesomeIcon icon={faMapMarkerAlt} className='places-list-icon' /> 3
              </li>
            </ul>
          </main>
        </div>

    );
  }
}

export default Sidebar;
