import React from 'react';
import {
  Box,
  makeStyles,
} from '@material-ui/core';
import NavBar from './components/navBar/navBar';
import UserWallet from './components/userWallet/userWallet';
import TransactionsTable from './components/transactionsTable/transactionsTable';

const useStyles = makeStyles(theme => ({
  transactionsTableComponent: {
    margin: '100px'
  },
  userWalletComponent: {
    margin: '50px 100px',
    height: '30%',
    backgroundColor: theme.palette.grey[100]
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
        <TransactionsTable />
      </Box>
    </Box>
  )
}

export default App;
