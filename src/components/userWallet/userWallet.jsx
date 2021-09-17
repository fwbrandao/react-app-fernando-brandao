
import React from 'react';
import { Box, InputBase, Typography } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import UserBalance from '../../core/userBalance/userBalance';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2)
  },
  search: {
    top: '10px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.65),
    },
    margin: 'auto',
    width: '50%',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
  },
}));

const UserWallet = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search for user…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Typography className={classes.title} variant="h6">
        User Wallet
      </Typography>
      <UserBalance />
    </Box>
  )
};

export default UserWallet;