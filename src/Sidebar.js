import React, { Component } from 'react';
import PlaceList from './PlaceList';
import FormSearch from './FormSearch';
import TypeSelector from './TypeSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTimes } from '@fortawesome/free-solid-svg-icons'

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
    const { 
      updateSearch, querySearch, activeType, setFilterType,  
      places, activatePlace, clearSearch 
    } = this.props;

    return (
      <div className='app-sidebar'>
        <button
          className='btn-circle btn-toggle-sidebar'
          onClick={this.toogleList}
          aria-hidden='true'
        >
          {this.state.active
            ? (<FontAwesomeIcon icon={faTimes} />)
            : (<FontAwesomeIcon icon={faList} />)
          }
        </button>
        <div className='sidebar-container'>
          <header className='app-sidebar-header'>
            <h2>Pontos de interesse</h2>
          </header>
          <main>
            <FormSearch
              updateSearch={updateSearch}
              query={querySearch}
            />
            <TypeSelector
              activeType={activeType}
              setFilterType={setFilterType}
            />

            {(!!querySearch || !!activeType) && (
              <button className='btn pull-right' onClick={() => clearSearch()}>
                <FontAwesomeIcon icon={faTimes} className='icon-clear-search' />  Redefinir Pesquisa
              </button>
            )}

            <PlaceList
              places={places}
              activatePlace={activatePlace}
              toogleList={this.toogleList}
            />
          </main>
        </div>
      </div>

    );
  }
}

export default Sidebar;
