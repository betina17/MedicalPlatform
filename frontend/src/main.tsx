import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import './index.css';

// One-time migration: purge the legacy persisted auth state. Sessions are now
// memory-only (refresh token lives in an httpOnly cookie), so nothing should
// linger in localStorage from older builds.
localStorage.removeItem('mediconnect-auth');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
