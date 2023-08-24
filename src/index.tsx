import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { AppRoutes } from 'main';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);

reportWebVitals();
