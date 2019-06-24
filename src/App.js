import React from 'react';
import logo from './images/logo-embu.jpg';
import './styles/css/App.css';
import LocationList from './LocationList';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <div className='site-logo'>
          <img src={logo} alt='Logo da Prefeitura de Embu das Artes' />
        </div>
      </header>

      <main className='app-main'>
        <LocationList />
        {/* <Map /> */}
        {/* <LocationInfo /> */}
      </main>

      <footer className='app-footer'>
        Desenvolvido por <a href='https://github.com/dnbastos'>Daniel Bastos</a>
      </footer>
    </div>
  );
}

export default App;
