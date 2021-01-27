import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';
import APP from './APP';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <BrowserRouter>
    <APP></APP>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();

