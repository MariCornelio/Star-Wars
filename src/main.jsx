import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CharacterContextProvider } from './components/context/CharacterContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharacterContextProvider>
      <App />
    </CharacterContextProvider>
  </React.StrictMode>
);
