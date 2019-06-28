import React, { Component } from 'react';
import PlaceList from './PlaceList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends Component {
  state = {
    active: false
  }

  toogleList = () => {
    document.querySelector('.app-sidebar').classList.toggle('is-open');
    this.setState(prevState => ({ active: !prevState.active }));
  }

  onOuterClick = callback => {
    document.documentElement.onclick = ev => {
      const isOnSidebar = currTarget => this.hasParent(currTarget, 'app-sidebar');
      if (!isOnSidebar(ev.target)) callback();
    }
  }

  hasParent = (element, classname) => {
    if (!element.parentNode) return false;
    if (element.classList.contains(classname)) return true;
    return this.hasParent(element.parentNode, classname);
  }

  componentDidMount() {
    this.onOuterClick(() => this.state.active && this.toogleList());
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
            <input
              className="input-control input-search"
              type='text'
              placeholder='Filtrar resultados'
              aria-label='Filtrar resultados'
            />
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
          </form>

          <PlaceList places={this.props.places} />

        </main>
      </div>

    );
  }
}

export default Sidebar;
