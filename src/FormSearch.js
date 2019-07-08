import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class FormSearch extends Component {

  render() {
    return (
      <form action='#' className='form-search'>
        <input
          className="input-control input-search"
          type='text'
          placeholder='Filtrar resultados'
          aria-label='Filtrar resultados'
          value={this.props.query}
          onChange={event => this.props.updateSearch(event.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className='search-icon' />
      </form>
    );
  }
}

export default FormSearch;
