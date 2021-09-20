import React, { useContext } from 'react';
import {
  Box,
  makeStyles,
} from '@material-ui/core';
import NavBar from './core/navBar/navBar';
import UserWallet from './components/userWallet/userWallet';
import TransactionsTable from './components/transactionsTable/transactionsTable';
import { FetchDataContext } from './context/fetchDataContext/fetchDataContext';

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
  const { allData } = useContext(FetchDataContext);

  return (
    <Box>
      <NavBar />
      <Box className={classes.userWalletComponent}>
        <UserWallet />
      </Box>
      <Box className={classes.transactionsTableComponent}>
        <TransactionsTable
          data={allData}
          title="All Transactions" />
      </Box>
    </Box>
  )
}

export default App;
