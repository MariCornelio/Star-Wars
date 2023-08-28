import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CharacterContextProvider } from './components/context/CharacterContext.tsx';

const rootElement = document.getElementById('root') ?? document.body;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <CharacterContextProvider>
      <App />
    </CharacterContextProvider>
  </React.StrictMode>
);
