import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(message_id, sender, destination, amount, gas_limit, gas_premium, gas_fee_cap) {
    return { message_id, sender, destination, amount, gas_limit, gas_premium, gas_fee_cap };
}

const rows = [
    createData('test id', 'test sender', 'test destination', '123', '0', '0', '0'),
];

export const TransactionsCard = () => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Message ID</TableCell>
              <TableCell align="right">Sender</TableCell>
              <TableCell align="right">Destination</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Gas Limit</TableCell>
              <TableCell align="right">Gas Premium</TableCell>
              <TableCell align="right">Gas Fee Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {row.message_id}
                </TableCell>
                <TableCell align="right">{row.sender}</TableCell>
                <TableCell align="right">{row.destination}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.gas_limit}</TableCell>
                <TableCell align="right">{row.gas_premium}</TableCell>
                <TableCell align="right">{row.gas_fee_cap}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }