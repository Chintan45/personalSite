import React from 'react';

import Data from "./Data";
import './App.css';
import AppRouter from './routes';

function App() {

  return (
    <div className="App" id="app">
      <Data />
      <AppRouter />
    </div>
  );
}

export default App;
