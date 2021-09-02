import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "transparent", 
        color: 'black', 
        boxShadow: " 0px 0px 10px 0px",
       
    },
  
    title: {
        
        fontFamily: 'Fredoka One',
        
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1,
            marginLeft: theme.spacing(-35)
            
        },
        
        marginLeft: theme.spacing(-2)
    },
    
    menuButton: {
    marginRight: theme.spacing(2)
    },

    headerOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "flex-end",
       
    }
}));

const Header = props => {

    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
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
            menuTitle: "Home",
            pageURL: "/"
        },
        {
            menuTitle: "Contact",
            pageURL: "/contact"
        },
        {
            menuTitle: "About",
            pageURL: "/about"
        }
    ];
      return (
            <ThemeProvider theme={theme}>
            
                  <AppBar position="fixed" className={classes.root}>
                      <Toolbar>
                          <Typography variant="h6" className={classes.title}>
                              FOODPAAKIE
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
                                      HOME
                                  </Button>
                                  <Button
                                      variant="contained"
                                      onClick={() => handleButtonClick("/contact")}
                                  >
                                      Become a partner
                                  </Button>
                                  <Button
                                      variant="contained"
                                      onClick={() => handleButtonClick("/about")}
                                  >
                                      login
                                  </Button>
                                  <Button
                                          variant="contained"
                                          onClick={() => handleButtonClick("/about")}
                                      >
                                          contact us
                                 </Button>
                              </div>
                          )}
                      </Toolbar>
                  </AppBar>
            
            </ThemeProvider>
      );
    
  }

export default (Header);
 