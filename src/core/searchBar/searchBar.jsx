
import React from 'react';
import { alpha, makeStyles, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
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

const SearchBar = () => {
  const classes = useStyles();

  return (
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
  )
};

export default SearchBar;