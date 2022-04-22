import React, { useState } from 'react';
import { Button } from "@material-ui/core";

import './Connector.css';

export const Connector = () => {
    let [title, setTitle] = useState('Terra on MetaMask');
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
            method: 'hello'
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
      <div className="Connector">
        <header className="Connector-header">
          <h1>{title}</h1>
          <Button variant="contained" onClick={connect}>Connect to MetaMask</Button>
          <br></br>
          <Button variant="contained" onClick={send}>Send</Button>
        </header>
      </div>
    );
}
