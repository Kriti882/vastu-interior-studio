import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// The entry point for the Vastu Interior Studio application. This file
// mounts the React component tree into the root element defined in
// `public/index.html` using React 18's streaming API.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);