import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Typography,
    OutlinedInput,
    InputAdornment,
    TextField,
    Avatar
} from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme)=>({
    createrList:{
        paddingTop:theme.spacing(5)
    },

    createrItem:{
        display:'flex',
        justifyContent:'start'
    },
    avatar:{
        width:theme.spacing(7),
        height:theme.spacing(7)
    },
    avatarName:{
        paddingLeft:theme.spacing(3),
        '& h6':{
            padding:'0px',
            margin:'0px'
        }
    }
}))

const PageNavbarSearchComponent = () =>{
    const classes = useStyles();

    return(
        <>
        <TextField
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            //variant="filled"
            fullWidth
            placeholder="Find a creator"
        />
        <div className={classes.createrList}>
            <div className={classes.createrItem}>
                <Avatar alt="Remy Sharp" src="/1.jpg" className={classes.avatar} />
                <div className={classes.avatarName}>
                    <Typography variant="subtitle1">
                        Ceno Pant
                    </Typography>
                    <Typography variant="subtitle2">
                        ceon Pant
                    </Typography>
                </div>
            </div>
        </div>
        </>
    )
}
export default PageNavbarSearchComponent
