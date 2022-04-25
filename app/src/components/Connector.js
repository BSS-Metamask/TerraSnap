import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Wallet } from './Wallet';
import { SnapContext } from '../App';

import '../App.css';

export const Connector = () => {
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState('');

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
      
      console.log('Attempting to get address...');
      await getAddress();
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

    async function getAddress () {
      let address = await window.ethereum.request({
          method: 'wallet_invokeSnap',
          params: [snapId, {
            method: 'getTerraAccount'
          }]
        })
      setAddress(address);
    }

    return (
      <SnapContext.Provider value={address}>
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
      </SnapContext.Provider>
    );
}
