import React from 'react';
import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import { green, blue, red } from '@material-ui/core/colors';
import EuroIcon from '@material-ui/icons/Euro';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: "end",
    alignItems: "center",
    margin: theme.spacing(1, 22, 1, 0),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  balances: {
    display: 'flex',
    justifyContent: "end",
    alignItems: "center",
    margin: theme.spacing(1, 0, 1, 0),
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  red: {
    color: '#fff',
    backgroundColor: red[500],
  },
  blue: {
    color: '#fff',
    backgroundColor: blue[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

export default function UserBalance({
  poundBalance,
  dollarBalance,
  euroBalance,
}) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>Current Balance</Typography>
      <Box className={classes.balances}>
        <Avatar className={classes.red}>
          GBP
        </Avatar>
        <Typography>{poundBalance.length ? poundBalance : " - "}</Typography>
        <Avatar className={classes.green}>
          <AttachMoneyIcon />
        </Avatar>
        <Typography>{dollarBalance.length ? dollarBalance : " - - "}</Typography>
        <Avatar className={classes.blue}>
          <EuroIcon />
        </Avatar>
        <Typography>{euroBalance.length ? euroBalance : " - - "}</Typography>
      </Box>
    </Box>
  );
}