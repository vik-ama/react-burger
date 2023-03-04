import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from "./components/app/app";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

