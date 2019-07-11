import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// TEST FILE, DELETE WHEN DONE!!
const test = require('./test_file');

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // TEST CODE, DELETE WHEN DONE!!
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Pokedex</h1>, root);
});