import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Initializing Next Level Tech Solutions App...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Critical Error: Could not find root element '#root' in the DOM.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("App successfully mounted to #root.");
  } catch (err) {
    console.error("Failed to render React app:", err);
  }
}