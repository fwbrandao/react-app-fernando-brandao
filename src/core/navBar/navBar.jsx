import React from 'react';
import {
    AppBar,
    Typography,
    Toolbar,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    DeFi Transactions Dashboard
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;