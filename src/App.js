import React from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';
import NavBar from './components/navBar/navBar';
import SmallTransactionTable from './components/transactionsTable/smallDataset/smallTransactionTable';

const useStyles = makeStyles(theme => ({
  transactionTable: {
    margin: '100px'
  }
}));
function App() {
  const classes = useStyles();

  return (
    <Box>
      <NavBar />
      <Box className={classes.transactionTable}>
        <SmallTransactionTable  />
      </Box>
    </Box>
  )
}

export default App;
