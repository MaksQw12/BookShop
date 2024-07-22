import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createContext } from 'react';
import './index.css';

import AuthStore from './store/authStore.js';
const authStore = new AuthStore();

export const Context = createContext({
  authStore,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context.Provider value={{ authStore }}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Context.Provider>,
);
