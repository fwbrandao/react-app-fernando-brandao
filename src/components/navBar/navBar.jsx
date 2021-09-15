import React from 'react';
import {
    Avatar,
    AppBar,
    Button,
    Box,
    Drawer,
    Divider,
    Typography,
    Toolbar,
    makeStyles,
    useTheme,
    Tooltip,
    IconButton,
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
                    Transactions Dashboard
                </Typography>
                <Button color="inherit">Fetch data</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;