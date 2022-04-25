import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Wallet } from './Wallet';

import '../App.css';

export const Connector = () => {
    let [connected, setConnected] = useState(false);
    let [title, setTitle] = useState('Terra on MetaMask');
    const snapId = `local:http://localhost:9000/`;
    async function connect () {
      console.log(snapId);
      try {
        console.log('Attempting to connect to snap...');
        await window.ethereum.request({
          method: 'wallet_enable',
          params: [{
            wallet_snap: { [snapId]: {} },
          }]
        })
      } catch (err) {
        console.error(err)
        alert('An error occurred: ' + err.message || err)
      }

      setConnected(true);   
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
        alert('An error occurred: ' + err.message || err)
      }
    }

    return (
      <div>
        {connected ? (
          <Wallet/>
        ) : (
          <div className="App">
            <header className="App-header">
              <Typography variant="h1">
                {title}
              </Typography>
            </header>
            <div className="App-container">
              <Button variant="outlined" onClick={connect}>Connect to MetaMask</Button>
              &nbsp;
              <Button variant="outlined" onClick={send}>Test</Button>
            </div>
          </div>
          )
        }
      </div>
    );
}
