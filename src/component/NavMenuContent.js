import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Grid,
    Typography,
    Avatar,
    
} from "@material-ui/core"
// import SendIcon from '@material-ui/icons/Send';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from  'clsx';
import { Link ,useLocation } from 'react-router-dom'
import routes from '../helpers/routes'
const useStyles = makeStyles((theme)=>({
    content:{
        padding:theme.spacing(5),
        
    },
    category:{
        paddingBottom:theme.spacing(5),
        display:'flex',
        justifyContent:'space-around'
    },
    categoryTitle:{
        marginBottom:theme.spacing(3),
        fontWeight:700
    },
    categoryContent:{
        width:'100%'
    },
    avatar:{
        width:theme.spacing(12),
        height:theme.spacing(12),
        marginRight:theme.spacing(3)
    },
    menuItem:{
        width:'100%',
        textDecoration: 'none',
      
    },
    gradientButton:{
        background: 'linear-gradient(to right, #666fe7 2%, #8666e8 99%)'
    },
    menuItemContent:{
        display:'flex',
        marginBottom:theme.spacing(2),
        color:theme.palette.primary.light,
        '&:hover': {
        //    color:theme.palette.primary.main,
        },
    },
    menuItemContentActive:{
        marginBottom:theme.spacing(2),
        display:'flex',
        //color:theme.palette.primary.main,
        borderRight:`3px solid ${theme.palette.primary.main}`,
        '& p': {
            color: theme.palette.primary.main
        }
    },
 
    menuItemText:{
        marginLeft:theme.spacing(3),
        paddingBottom:'0px',
    }
    
}))

const NavMenuContent = () =>{
    const classes = useStyles();
    const location = useLocation();

    return(
        <>
            <div className={classes.content}>
                <div className={classes.category}>
                    <Avatar alt="Remy Sharp" src="/1.jpg" className={classes.avatar} />
                    <div className={classes.avatarName}>
                        <Typography variant="subtitle1">
                            Ceno Pant
                        </Typography>
                        <Typography color="secondary" variant="subtitle2">
                            @stormsla
                        </Typography>
                        <Button variant="outlined" color="primary">
                            Admin
                        </Button>
                    </div>
                </div>
                <div className={classes.category}>
                    <Button className={classes.gradientButton} color="secondary" variant="contained"> View Page </Button>
                    <Button variant="outlined" color="primary"> Edit </Button>
                </div>
                <div className={classes.category}>
                    <div className={classes.categoryContent}>
                        <Typography color="primary" className={classes.categoryTitle}>
                            DASHBOARD
                        </Typography>
                        {routes.map((route,index)=>{
                            return(
                                <Link key={index} to={route.path} className={classes.menuItem}>
                                    <div className={
                                        route.path == location.pathname ? 
                                            classes.menuItemContentActive : 
                                            classes.menuItemContent}>

                                            {route.icon}
                                        <Typography className={classes.menuItemText}>
                                            {route.name}
                                        </Typography>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default NavMenuContent