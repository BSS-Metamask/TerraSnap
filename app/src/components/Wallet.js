import { React, useState } from 'react';
import { Typography } from '@mui/material';
import WalletTabs from './Tabs';

export const Wallet = () => {
  let [title, setTitle] = useState('Terra Wallet');

  return (
    <div className="App">
      <header className="App-header">
      <Typography variant="h1">
        {title}
      </Typography>
      </header>
      <div className="App-container">
          <WalletTabs/>
      </div>
    </div>
  );
}
