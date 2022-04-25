import * as React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AddressCard } from './AddressCard';

export const Tabs = () =>  {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box sx={{ typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} sx={{ color: 'white' }} centered>
              <Tab label="Account Details" value="1" />
              <Tab label="Send" value="2" />
              <Tab label="Receive" value="3" />
              <Tab label="Transactions" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            TODO: Display Account Details
          </TabPanel>
          <TabPanel value="2">
            TODO: Create form with fields for recipient, amount, gas price, exchange rate, etc
          </TabPanel>
          <TabPanel value="3">
            <AddressCard />
          </TabPanel>
          <TabPanel value="4">
            TODO: Show transaction history
          </TabPanel>
        </TabContext>
      </Box>
  );
}