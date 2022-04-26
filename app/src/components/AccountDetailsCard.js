import React, { useContext, useEffect, useState } from "react";
import { SnapContext } from "../App";
import { Grid } from '@mui/material';
import { snapId } from './Connector';

import "../App.css"

export const AccountDetailsCard = () => {
  const address = useContext(SnapContext);
  const [bal, setBal] = useState(null);

  useEffect(() => {
    const getBalance = async () => {
      let balance = await window.ethereum.request({
        method: 'wallet_invokeSnap',
        params: [snapId, {
          method: 'getTerraAccountBalance'
        }]
      })
      setBal(balance);
      console.log('balance', balance);
    }
    
    getBalance();
  }, [])

  return (

    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: "flex", overflowWrap: "break-word" }}>
          <strong>Address: </strong> {address.accAddress}
      </Grid>
      <Grid item xs={12} style={{ display: "flex", overflowWrap: "break-word" }}>
      <strong>Key: </strong> {address.publicKey.key}
      </Grid>
      <Grid item xs={12} style={{ display: "flex", overflowWrap: "break-word" }}>
      <strong>Balance: </strong> {bal?.balances?.[0] || 0} Luna
      </Grid>
    </Grid>
  );
}