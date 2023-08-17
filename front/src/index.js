import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppMovie from './APIMovie';
import Menu from './menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu />
    <AppMovie />
  </React.StrictMode>
);


