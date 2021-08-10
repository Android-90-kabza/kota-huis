import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";


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
    navbars: {
        backgroundColor: "transparent",
        color: 'black',
        boxShadow: "0px 0px 0px 0px",
    },
    title: {

        [theme.breakpoints.down("xs")]: {
            flexGrow: 1
        },
        fontFamily: 'Fredoka One',
    },
    header: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
    },
    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end"
        
    }
}));

const Header = (props) => {

    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    ///const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const handleButtonClick = pageURL => {
        history.push(pageURL);
    };

    const menuItems = [

        {
            menuTitle: "BECOME PARTNER",
            pageURL: "/"
        },
        {
            menuTitle: "Home",
            pageURL: "/"
        },

        {
            menuTitle: "Login",
            pageURL: "/Login"
        },

    ];

    
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.navbars}>
                    <Toolbar>
                        <Typography variant="h6" align="left" className={classes.title}>
                            Kota-huis
                        </Typography>

                        {isMobile ? (
                            <>
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleMenu}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                    }}
                                    open={open}
                                    onClose={() => setAnchorEl(null)}
                                >
                                    {menuItems.map(menuItem => {
                                        const { menuTitle, pageURL } = menuItem;
                                        return (
                                            <MenuItem onClick={() => handleMenuClick(pageURL)}>
                                                {menuTitle}
                                            </MenuItem>
                                        );
                                    })}
                                </Menu>
                            </>
                        ) : (
                            <div className={classes.headerOptions}>
                                <Button
                                    variant="contained"
                                    onClick={() => handleButtonClick("/")}
                                >
                                    Become partner
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => handleButtonClick("/Login")}
                                >
                                    LOGIN
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => handleButtonClick("/Contact us")}
                                >
                                    CONTACT US
                                </Button>
                            </div>
                        )}

                        

                    </Toolbar>
                </AppBar>
            </div>
        </ThemeProvider>
    );

}

export default Header;