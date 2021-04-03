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
  Badge
} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import NavMenuContent from './NavMenuContent'

import { BrowserRouter, Route, Switch ,useLocation } from 'react-router-dom';

import Dashboard from "../pages/Dashboard/Dashboard"
import Application from "../pages/Application/Application"
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
      minHeight:'64px'
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
      minHeight:'64px'
    },
    bottomMenuContent:{
      display:'flex',
      justifyContent:'center',

      '& a':{
        marginRight:theme.spacing(4),
        textDecoration: 'none',
        color:'black',

      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    navMenu: {
      [theme.breakpoints.up('md')]: {
        width: navWidth,
        flexShrink: 0,
      },
    },
    navMenuContent: {
      width: navWidth,
      top:'65px',
      [theme.breakpoints.down('sm')]: {
        top:'0px'
      },
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      //paddingBottom:'70px',
      backgroundColor:'rgba(222, 222, 222, 255)',
      height:'100vh',
      position:'relative'
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
          <AppBar position="fixed" className={classes.topMenu}>
            <Toolbar className={classes.topMenuToolbar}>
              <img src="/img/logo.png" className={classes.logo}></img>
              {/* <Typography variant="h6">
                News
              </Typography> */}
              
              <div className={classes.grow}/>
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
                  <Badge badgeContent={4} color="primary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton aria-label="show 17 new notifications" color="third">
                  <Badge badgeContent={17} color="primary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
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
                <NavMenuContent/>
              </Drawer>
            </Hidden>
          </nav>

          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/application">
                    <Application/>
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

          </main>
          <div className={classes.footer}>
          <AppBar position="fixed" className={classes.bottomMenu}>
            <Toolbar className={classes.bottomMenuToolbar}>
                <Grid container>
                  <Grid item md={6} xs={0}>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <div className={classes.bottomMenuContent}>
                      <a href="/dashboard"><FacebookIcon variant="outlined"></FacebookIcon></a>
                      <a href="/dashboard"><TwitterIcon></TwitterIcon></a>

                      <a href="/dashboard">Conact Us</a>
                      <a href="/dashboard">Terms</a>
                      <a href="/dashboard">Privacy</a>
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