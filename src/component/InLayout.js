import React, { useState, useEffect } from "react";


import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Grid,
  Hidden,
  Drawer,
  Badge,
  InputAdornment,
  TextField,
} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';

import NavMenuContent from './NavMenuContent'

import { BrowserRouter, Route, Switch ,useLocation } from 'react-router-dom';

import Dashboard from "../pages/Dashboard/Dashboard"
import Application from "../pages/Application/Application"
import Community from "../pages/Community/Community"
import Affliate from "../pages/Affliate/Affliate"
import Gift from "../pages/Gift/Gift"

import TestPage from "../pages/Testpage"

const navWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    logo:{
      height:theme.spacing(4)
    },
    topMenu: {
      boxShadow:'0px 0px black',
      borderBottom:'1px solid rgba(0, 0, 0, 0.12)',
      backgroundColor:'white'
    },
    topMenuToolbar:{
      minHeight:'45px'
    },
    grow: {
      flexGrow: 1,
    },
    topMenuToolLeftDesktop:{
      display:'flex'
    },
    bottomMenu:{
      top: 'auto',
      bottom: 0,
      zIndex:2000,
      borderTop:'1px solid rgba(0, 0, 0, 0.12)',
      backgroundColor:'white',
      boxShadow:'0px 0px black',

    },
    bottomMenuToolbar:{
      minHeight:'45px'
    },
    bottomMenuContent:{
      display:'flex',
      justifyContent:'center',

      '& a':{
        marginRight:theme.spacing(4),
        textDecoration: 'none',
        color:theme.palette.primary.dark,

      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
//    toolbar: theme.mixins.toolbar,
    toolbar: {
      height:'46px',
      borderBottom:'1px solid rgba(0, 0, 0, 0.12)',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'white',
      
      textAlign:'center',
      display:'flex',
      position:'fixed',
    },
    contentTop:{
      width:'100%',
      [theme.breakpoints.up('md')]: {
      width:'calc(100% - 300px)'
      }
    },
    menuTop:{
      width:'300px'
    },
    globalSearch:{
      '& *':{
        border:'0px solid white',
      },
      '& .Mui-focused':{
        border:'0px solid white',
      },
      width:'100%'

    },
    navMenu: {
      [theme.breakpoints.up('md')]: {
        width: navWidth,
        flexShrink: 0,
      },
    },
    navMenuContent: {
      width: navWidth,
      
      //top:'65px',
      [theme.breakpoints.up('md')]: {
        boxShadow:'0px 0px 15px 10px #ececec',  
      },
    },
    content: {
      flexGrow: 1,
      //height:'100vh',
      position:'relative',
      paddingBottom:'46px'
      //backgroundColor:'#e5e5e5'
    },
    mainContent:{
      padding:theme.spacing(3),
      paddingTop:theme.spacing(11),
      
    },
    footer:{

    },
    trayButton:{
      /*
      position:'absolute',
      top:theme.spacing(10),
      right:theme.spacing(2),
      backgroundColor:"white",
      border:`1px solid ${theme.palette.primary.main}`
      */
      [theme.breakpoints.up('md')]: {
        display:'none'
      },
    }
  }));
const InLayout = (props) =>{
    const { window } = props;
    const theme = useTheme();
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const container = window !== undefined ? () => window().document.body : undefined;
    
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return(
        <div className={classes.root}>
 
          <nav className={classes.navMenu}>
            <Hidden mdUp>
              {/* <>123</> */}
              <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.navMenuContent,
                }}
                style={{width:'240px'}}

                ModalProps={{
                  keepMounted: true, 
                }}
              >
                <div className={classes.toolbar + ' ' + classes.menuTop}>
                  <img src="/img/logo.png" className={classes.logo}></img>  
                </div>
                <NavMenuContent/>
              </Drawer>
            </Hidden>
            <Hidden smDown>
              <Drawer
                classes={{
                  paper: classes.navMenuContent,
                }}
                style={{width:'240px'}}
                variant="permanent"
                open
              >
                <div className={classes.toolbar + ' ' + classes.menuTop}>
                  <img src="/img/logo.png" className={classes.logo}></img>
                </div>
                <NavMenuContent/>
              </Drawer>
            </Hidden>
          </nav>

          <main className={classes.content}>

            <div className={classes.toolbar + ' ' + classes.contentTop}>
              <TextField
                  InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  //variant="filled"
                  className={classes.globalSearch}
                  placeholder="Global Search"
              />
              {/* <div className={classes.grow}/> */}
              <div className={classes.topMenuToolLeftDesktop}>
                <IconButton 
                  edge="start" 
                  color="inherit" 
                  aria-label="menu"
                  color="primary"
                  className={classes.trayButton}
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon variant="outlined"/>
                  
                </IconButton>
                <IconButton aria-label="show 4 new mails" color="third">
                  <Badge badgeContent={4} color="primary" >
                    <MailOutlineIcon/>
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="third">
                  <Badge badgeContent={17} color="primary">
                    <NotificationsNoneIcon />
                  </Badge>
                </IconButton>
              </div>
            </div>
            <div className={classes.mainContent}>
              <Switch>
                  <Route path="/dashboard">
                      <Dashboard/>
                  </Route>
                  <Route path="/application">
                      <Application/>
                  </Route>
                  <Route path="/community">
                      <Community/>
                  </Route>
                  <Route path="/affliate">
                      <Affliate/>
                  </Route>
                  <Route path="/gift">
                      <Gift/>
                  </Route>
                  <Route path="/test">
                      <TestPage/>
                  </Route>
                  <Route path="/">
                      <Dashboard/>
                  </Route>
              </Switch>
              <div className={classes.toolbar} />
            </div>
            
          </main>
          <div className={classes.footer}>
            <AppBar position="fixed" className={classes.bottomMenu}>
              <Toolbar className={classes.bottomMenuToolbar}>
                  <Grid container>
                    <Grid item md={6} xs={0}>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <div className={classes.bottomMenuContent}>
                        <a href="/dashboard"><Typography variant="subtitle1"><FacebookIcon variant="outlined"></FacebookIcon></Typography></a>
                        <a href="/dashboard"><Typography variant="subtitle1"><TwitterIcon></TwitterIcon></Typography></a>

                        <a href="/dashboard"><Typography variant="subtitle1">Conact Us</Typography></a>
                        <a href="/dashboard"><Typography variant="subtitle1">Terms</Typography></a>
                        <a href="/dashboard"><Typography variant="subtitle1">Privacy</Typography></a>
                      </div>
                    </Grid>
                  </Grid>
              </Toolbar>
            </AppBar>
          </div>
        </div>
    )
}
export default InLayout;