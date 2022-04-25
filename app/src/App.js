import React, { createContext } from 'react';
import { Connector } from './components/Connector';
import './App.css';

export const SnapContext = createContext();

function App() {
  return (
    <div className='App'>
      <Connector/>
    </div>
  );
}

export default App;
