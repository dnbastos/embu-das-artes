import React, { Component } from 'react';
import PlaceList from './PlaceList';
import FormSearch from './FormSearch';
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
              updateSearch={this.props.updateSearch}
              query={this.props.querySearch}
            />
            <TypeSelectior />
            <PlaceList
              places={this.props.places}
              activatePlace={this.props.activatePlace}
              toogleList={this.toogleList}
            />
          </main>
        </div>
      </div>

    );
  }
}

export default Sidebar;
