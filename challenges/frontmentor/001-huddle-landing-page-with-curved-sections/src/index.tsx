import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource-variable/open-sans';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
