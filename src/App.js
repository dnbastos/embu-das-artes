import React from 'react';
import logo from './images/logo-embu.jpg';
import './styles/css/App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <div className='site-logo'>
          <img src='http://192.168.2.178/intranet_desenv/assets/img/logos/logo.png' alt='Logo da Prefeitura de Embu das Artes' />
        </div>
      </header>

      <main className='app-main'>
        <Sidebar />
        {/* <Map /> */}
        {/* <PlaceInfo /> */}
      </main>

      <footer className='app-footer'>
        Desenvolvido por <a href='https://github.com/dnbastos'>Daniel Bastos</a>
      </footer>
    </div>
  );
}

export default App;
