import React, { useContext} from "react";
import QRCode from "react-qr-code";
import { SnapContext } from "../App";
import { Grid } from '@mui/material';

import "../App.css"

export const AddressCard = () => {
  const address = useContext(SnapContext);

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12} style={{ overflowWrap: "break-word" }}>
          Key: {address.publicKey.key}
      </Grid>
      <Grid item xs={12}>
        <QRCode size={200} value={address.publicKey.key} />
      </Grid>
    </Grid>
  );
}