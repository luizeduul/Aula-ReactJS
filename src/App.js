import React, { Component } from 'react';

import './styles.css';

import Main from './pages/main';

import Routes from './routes'

import Header from './components/Header';


const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
