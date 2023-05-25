import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChuckApp } from './ChuckApp.jsx';
import { EstadoProvider } from './contexto/EstadoProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EstadoProvider>
      <ChuckApp />
    </EstadoProvider>
  </React.StrictMode>,
);
