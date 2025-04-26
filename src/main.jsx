import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// React 18'da createRoot() ishlatiladi
const root = createRoot(document.getElementById('root'));

// StrictMode bilan dastur render qilinadi
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
