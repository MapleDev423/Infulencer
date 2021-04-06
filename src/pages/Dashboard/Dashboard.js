import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Grid,
    Typography,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    IconButton,

    LinearProgress,
    CircularProgress
} from "@material-ui/core"
// import LineGraph from '@material-ui/core/LineGraph';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import StatisticWidget from "./StatisticWidget";
import FollowerWidget from "./FollowerWidget"



const useStyles = makeStyles((theme)=>({
    progressbar:{
        backgroundColor: theme.palette.purple.color
    },
    progresInfo:{
        display:'flex',
        justifyContent:'space-between'
    },
    progressArrow:{
        fontSize:'30px',
    },
    grow:{
        flexGrow: 1,
    },
    arrowIcon:{
        color:theme.palette.green.color
    }
    
}))
const Dashboard = (props) =>{
    const classes = useStyles();
    const theme = useTheme();
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={9}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4}>
                            <Card>
                                <CardHeader
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon color='primary'/>
                                    </IconButton>
                                    }
                                    titleTypographyProps={{variant:'subtitle1' }}
                                    title="Total Visits"
                                    subheaderTypographyProps={{variant:'subtitle1',color:'primary' }}
                                    subheader="47%"
                                />
                                <CardContent>
                                    <div className={classes.progresInfo}>
                                        <Typography variant='subtitle1'>340</Typography>
                                        <Typography variant='h5'>
                                            <ArrowUpwardIcon className={classes.arrowIcon}></ArrowUpwardIcon>
                                        </Typography>
                                    </div>
                                    <LinearProgress 
                                        classes={{
                                            //colorPrimary: classes.colorPrimary, 
                                            barColorPrimary: classes.progressbar
                                        }}
                                        variant="determinate" 
                                        value={70}
                                    ></LinearProgress>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}  sm={12} md={4}>
                            <Card>
                                <CardHeader
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon color='primary'/>
                                    </IconButton>
                                    }
                                    titleTypographyProps={{variant:'subtitle1' }}
                                    title="Total Sales"
                                    subheaderTypographyProps={{variant:'subtitle1',color:'primary' }}
                                    subheader="47%"
                                />
                                <CardContent>
                                    <div className={classes.progresInfo}>
                                        <Typography variant='subtitle1'>$239.1</Typography>
                                        <Typography variant='h5' color="secondary">
                                            <ArrowUpwardIcon className={classes.arrowIcon} ></ArrowUpwardIcon>
                                        </Typography>
                                    </div>
                                    <LinearProgress 
                                        classes={{
                                            //colorPrimary: classes.colorPrimary, 
                                            barColorPrimary: classes.progressbar
                                        }}
                                        variant="determinate" 
                                        value={70}
                                    ></LinearProgress>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Card>
                                <CardHeader
                                    action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon color='primary'/>
                                    </IconButton>
                                    }
                                    titleTypographyProps={{variant:'subtitle1' }}
                                    title="Total Applications"
                                    subheaderTypographyProps={{variant:'subtitle1',color:'primary' }}
                                    subheader="47%"
                                />
                                <CardContent>
                                    <div className={classes.progresInfo}>
                                        <Typography variant='subtitle1'>$239.1</Typography>
                                        <Typography variant='h5' color="secondary">
                                            <ArrowUpwardIcon className={classes.arrowIcon}></ArrowUpwardIcon>
                                        </Typography>
                                    </div>
                                    <LinearProgress 
                                        classes={{
                                            //colorPrimary: classes.colorPrimary, 
                                            barColorPrimary: classes.progressbar
                                        }}
                                        variant="determinate" 
                                        value={70}
                                    ></LinearProgress>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <StatisticWidget/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <FollowerWidget/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Dashboard