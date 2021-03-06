import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js'
import { Provider } from 'react-redux';

console.log(store)

ReactDOM.render(
<Provider store={store}>
  <App />
</ Provider>, 
  document.getElementById('root')
  );


registerServiceWorker();
