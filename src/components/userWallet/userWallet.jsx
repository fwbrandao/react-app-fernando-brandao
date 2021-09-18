
import React, { useState, useContext } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import UserBalance from '../../core/userBalance/userBalance';
import SearchBar from '../../core/searchBar/searchBar';
import TransactionsTable from '../transactionsTable/transactionsTable';
import { FetchDataContext } from '../../context/fetchDataContext/fetchDataContext';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2)
  },
  transactionsTable: {
    margin: theme.spacing(2)
  }
}));

const UserWallet = () => {
  const classes = useStyles();
  let uniqueUserData = [];
  const [userId, setUserId] = useState("58b906e2-df1e-4b1c-a9c5-eced03801299");
  const { getUniqueUserData } = useContext(FetchDataContext);

  uniqueUserData = getUniqueUserData(userId);

  return (
    <Box>
      <Typography className={classes.title} variant="h6">
        User Wallet
      </Typography>
      <SearchBar />
      <Box
        className={classes.transactionsTable}
      >
        <UserBalance
          poundBalance
          dollarBalance
          euroBalance
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