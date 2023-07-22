import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux';
import store from './redux/store'


ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
        </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
