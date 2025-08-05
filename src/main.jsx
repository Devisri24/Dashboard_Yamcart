import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Make sure this line is NOT commented
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
