import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from "./components/Flavor";
import Example from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculator/>
    <Example/>
  </React.StrictMode>
);
