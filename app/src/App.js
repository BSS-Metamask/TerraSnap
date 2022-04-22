import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  let [title, setTitle] = useState('Learn React');
  const snapId = `local:http://localhost:9000/`;
  async function connect () {
    console.log(snapId);
    await window.ethereum.request({
      method: 'wallet_enable',
      params: [{
        wallet_snap: { [snapId]: {} },
      }]
    })
  }

  async function send () {
    try {
      const response = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: [snapId, {
          method: 'getTerraAccountBalance'
        }]
      })
      console.log(response);
      setTitle(response);
    } catch (err) {
      console.error(err)
      alert('Problem happened: ' + err.message || err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={connect}>Connect!</button>
        <button onClick={send}>Send!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </header>
    </div>
  );
}

export default App;
