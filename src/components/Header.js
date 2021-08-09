import React from 'react';

import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {       
        fontFamily: [
    'Fredoka One',
        ].join(','),
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    look: {
        backgroundColor: "transparent", 
        color: 'black', 
        boxShadow: "0px 0px 0px 0px",
    },
    title: {
        flexGrow: 1,
        fontFamily: 'Fredoka One',
    },
    header: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
      },
}));

export default function Header() {

    const classes = useStyles();
      return (
            <ThemeProvider theme={theme}>
            <div className={classes.root}>
                    <AppBar position="fixed" className={classes.look}>
                        <Toolbar>
                        <Typography variant="h6" align="left" className={classes.title}>
                        Kota-huis
                        </Typography>
                        <Button color="inherit">Become a Partner</Button>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Contact us</Button>
                        </Toolbar>
                    </AppBar>
            </div>
            </ThemeProvider>
      );
    
  }
 