import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import EuroIcon from '@material-ui/icons/Euro';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  red: {
    color: '#fff',
    backgroundColor: 'red',
  },
  blue: {
    color: '#fff',
    backgroundColor: 'blue',
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
}));

export default function UserBalance() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.red}>
        GBP
      </Avatar>
      <Typography>100</Typography>
      <Avatar className={classes.green}>
        <AttachMoneyIcon />
      </Avatar>
      <Typography>100</Typography>
      <Avatar className={classes.blue}>
        <EuroIcon />
      </Avatar>
      <Typography>100</Typography>
    </div>
  );
}