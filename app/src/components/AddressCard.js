import React, { useContext} from "react";
import QRCode from "react-qr-code";
import { SnapContext } from "../App";
import { Grid } from '@mui/material';

import "../App.css"

export const AddressCard = () => {
  const address = useContext(SnapContext);
  console.log(address);

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={8}>
        Public Key: {address.publicKey.key}
      </Grid>
      <Grid item xs={8}>
        <QRCode value={address.publicKey.key} />
      </Grid>
    </Grid>
  );
}