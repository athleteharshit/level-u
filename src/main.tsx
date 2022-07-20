import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import Providers from './setup/provider/provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  // <React.StrictMode>
  <Providers>
    <App />
  </Providers>
  // </React.StrictMode>
);
