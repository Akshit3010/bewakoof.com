import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Cash, DebitCard, Net, UPI, Wallet } from './Tabs';
import { DebitComp } from './DebitComp';
import { WalletComp } from './WalletComp';
import { UpiComp } from './UpiComp';
import { NetComp } from './NetComp';
import { CashComp } from './CashComp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography  component={'span'} >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export  function Payment() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', }}
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider',margin:0}}
      >
        <Tab label={<DebitCard />} {...a11yProps(0)}/><hr/>
        <Tab label={<Wallet/>} {...a11yProps(2)} /><hr/>
        <Tab label={<UPI/>} {...a11yProps(4)} /><hr/>
        <Tab label={<Net/>} {...a11yProps(6)} /><hr/>
        <Tab label={<Cash/>} {...a11yProps(8)} /><hr/>
      </Tabs>
      <TabPanel value={value} index={0}><DebitComp/></TabPanel>
      <TabPanel value={value} index={2}><WalletComp/></TabPanel>
      <TabPanel value={value} index={4}><UpiComp/></TabPanel>
      <TabPanel value={value} index={6}><NetComp/></TabPanel>
      <TabPanel value={value} index={8}><CashComp/></TabPanel>

    </Box>
  )
}
