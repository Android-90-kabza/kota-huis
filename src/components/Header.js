import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {

        fontFamily: [
            'Mandali',
            "sans - serif"
        ].join(','),
    }
});

const useStyles = makeStyles((theme) => ({
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





export default function Header() {

    const classes = useStyles();

    return (
        <nav className={classes.root}>
            <ThemeProvider theme={theme}>
                <AppBar position="static" style={{ backgroundColor: "transparent", color: "black", boxShadow: "0px 0px 0px 0px" }}>
                    <Toolbar >
                        <Box pl="1rem" >
                            <Typography variant="h4" ml="2px" className={classes.title}>
                                KotaHuis
                            </Typography>
                        </Box>


                        <Box pl="62rem" >
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Contact</Button>
                        </Box>

                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </nav>
    );

}
