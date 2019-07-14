import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TEST FILE, DELETE WHEN DONE!!
const test = require('./test_file');

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

// TEST CODE DELETE WHEN DONE!!
window.dispatch = store.dispatch;
window.getState = store.getState;
  ReactDOM.render(<Root store={store} />, root);
});