import React, { useState } from "react";
import { Grid, Input, Box, TextField, Button, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import "../App.css"

const defaultValues = {
    recipient: "",
    amount: 0,
    gasLimit: 0,
    gasPremium: 0,
    gasFeeCap: 0,
    maxFee: 0,
};

export const SendCard = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField fullWidth
                    id="recipient-input" 
                    label="Recipient" 
                    variant="standard"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth
                    id="amount-input" 
                    label="Amount" 
                    variant="standard"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">LUNA</InputAdornment>,
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth
                id="gas-limit-input" 
                label="Gas Limit" 
                variant="standard"
                InputProps={{
                    endAdornment: <InputAdornment position="end">LUNA</InputAdornment>,
                }}
            />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth
                    id="gas-premium-input" 
                    label="Gas Premium" 
                    variant="standard"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">LUNA</InputAdornment>,
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth
                    id="gas-fee-cap-input" 
                    label="Gas Fee Cap" 
                    variant="standard"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">LUNA</InputAdornment>,
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth
                    id="max-fee-input" 
                    label="Max Fee Cap" 
                    variant="standard"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">LUNA</InputAdornment>,
                    }}
                />
            </Grid>
            <Box display="flex">

            </Box>
            <Grid container item xs={12} justifyContent="flex-end">
                <Button variant="outlined">Auto Fill Gas</Button>
                <Button variant="outlined" endIcon={<SendIcon />} style={{ marginLeft: 5 }}>Send</Button>
            </Grid>
        </Grid>
    );
}