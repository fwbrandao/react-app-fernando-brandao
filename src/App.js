import React from 'react';
import {
  Box,
  makeStyles,
} from '@material-ui/core';
import NavBar from './components/navBar/navBar';
import SmallTransactionsTable from './components/transactionsTable/smallDataset/smallTransactionsTable';
import UserWallet from './components/userWallet/userWallet';

const useStyles = makeStyles(theme => ({
  transactionsTableComponent: {
    margin: '100px'
  },
  userWalletComponent: {
    margin: '50px 100px'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Box>
      <NavBar />
      <Box className={classes.userWalletComponent}>
        <UserWallet />
      </Box>
      <Box className={classes.transactionsTableComponent}>
        <SmallTransactionsTable />
      </Box>
    </Box>
  )
}

export default App;
