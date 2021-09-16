import React from 'react';
import {
  Box,
  makeStyles
} from '@material-ui/core';
import NavBar from './components/navBar/navBar';
import SmallTransactionsTable from './components/transactionsTable/smallDataset/smallTransactionsTable';

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
        <SmallTransactionsTable  />
      </Box>
    </Box>
  )
}

export default App;
