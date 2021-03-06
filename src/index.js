import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Router = process.env.node_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Router>
    <ScrollToTop/>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
