
import React, { useContext } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import UserBalance from '../../core/userBalance/userBalance';
import SearchBar from '../../core/searchBar/searchBar';
import TransactionsTable from '../transactionsTable/transactionsTable';
import { FetchDataContext } from '../../context/fetchDataContext/fetchDataContext';
import { TransactionsContext } from '../../context/transactionsContext/transactionsContext';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2)
  },
  transactionsTable: {
    margin: theme.spacing(2)
  },
  searchBar: {
    margin: theme.spacing(2)
  },
}));

const UserWallet = () => {
  const classes = useStyles();
  let uniqueUserData = [];
  const { userId } = useContext(TransactionsContext);
  const { getUniqueUserData } = useContext(FetchDataContext);
  let poundBalance = [];
  let dollarBalance = [];
  let euroBalance = [];

  uniqueUserData = getUniqueUserData(userId);

  // Push all amounts into its correspondent currency array and
  // convert it to int
  uniqueUserData.map(userData => {
    if (userData.currency === 'GBP') {
      poundBalance.push(Number(userData.amount));
    }
    if (userData.currency === 'USD') {
      dollarBalance.push(Number(userData.amount));
    }
    if (userData.currency === 'EUR') {
      euroBalance.push(Number(userData.amount));
    }
    return userData;
  })

  return (
    <Box>
      <Typography className={classes.title} variant="h6">
        User Wallet
      </Typography>
      <Box className={classes.searchBar}>
        <SearchBar />
      </Box>
      <Box
        className={classes.transactionsTable}
      >
        <UserBalance
          poundBalance={poundBalance}
          dollarBalance={dollarBalance}
          euroBalance={euroBalance}
        />
        {uniqueUserData && uniqueUserData.length ? (
          <TransactionsTable
            data={uniqueUserData}
            title={`Transactions for user ${userId}`}
          />
        ) : null}
      </Box>
    </Box>
  )
};

export default UserWallet;