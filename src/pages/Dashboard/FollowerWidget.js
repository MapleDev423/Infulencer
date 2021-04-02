import React, { useState, useEffect } from "react";
import {Pie , Doughnut} from 'react-chartjs-2';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Box,
    Button,
    Grid,
    Avatar,

    Typography,
    Card,
    CardHeader,
    CardContent,
    IconButton,
} from "@material-ui/core"
import { grey, deepPurple, amber,teal } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
const chartColors = [
    deepPurple[500],
    "rgba(75,192,192,1)",
    "#00f",
  ];
const useStyles = makeStyles((theme)=>({
    progresInfo:{
        display:'flex',
        justifyContent:'space-between'
    },
    content:{
        position:'relative',
        padding:theme.spacing(5)
    },
    chartText:{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    grow:{
        flexGrow: 1,
    },
    followerList:{

    },
    
    followerListItem:{
        borderTop:'1px solid rgba(0,0,0,0.2)',
        padding:theme.spacing(2),
        paddingBottom:theme.spacing(1),
        display:'flex',
    },
    followerLight:{
        width:theme.spacing(2),
        height:theme.spacing(2),
        borderRadius:'50%',
        marginRight:theme.spacing(1),
        backgroundColor:'red'
    },
    opacityText:{
        opacity:'.5'
    }
}))

const data = {
    maintainAspectRatio: false,
    responsive: false,
    labels: ["Youtube", "Instagram", "Tiktok"],
    datasets: [
        {
            data: [123900, 130000, 42000 ],
            backgroundColor: chartColors,
            borderColor:'white',
            hoverBackgroundColor: chartColors,
            borderWidth:5,
            //weight:1500,
            cutoutPercentage:60
        },
    ]
  };
const FollowerWidget  = () =>{
    const classes = useStyles();

    return(
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                    
                    </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon color='primary'/>
                </IconButton>
                }
                titleTypographyProps={{variant:'subtitle1' }}
                title="Total Followers"
                subheaderTypographyProps={{variant:'subtitle2',color:'primary' }}
                subheader="47%"
            />
            <CardContent>
                <div className={classes.progresInfo}>
                    <div>
                    <Typography variant='h4'>5.8M</Typography>
                    <Typography variant='caption' color="secondary">Total Followers</Typography>
                    </div>
                    <Typography variant='h5' color="primary">
                        <ArrowUpwardIcon color='secondary' ></ArrowUpwardIcon>
                    </Typography>
                </div>
                
                <div className={classes.content}>
                    <Doughnut 
                        data={data}
                        width={5}
                        height={5}
                        options={{
                        legend:{display:false},
                        cutoutPercentage:90
                        
                        // title: {display: true,text: 'Açılan Sandık'},
                        }}
                    >
                    </Doughnut>
                    <Typography variant="h4" className={classes.chartText}>+25%</Typography>
                </div>
                
            </CardContent>
            <div className={classes.followerList}>
                <div className={classes.followerListItem}>
                    <div className={classes.followerLight} style={{backgroundColor:`${chartColors[0]}`}}>
                    </div>
                    <Typography variant="caption" className={classes.opacityText}>Youtube</Typography>
                    <div className={classes.grow}/>
                    <Typography variant="caption" className={classes.opacityText}>239k</Typography>
                </div>
                <div className={classes.followerListItem}>
                    <div className={classes.followerLight} style={{backgroundColor:`${chartColors[1]}`}}>
                    </div>
                    <Typography variant="caption" className={classes.opacityText}>Instagram</Typography>
                    <div className={classes.grow}/>
                    <Typography variant="caption" className={classes.opacityText}>1.3M</Typography>
                </div>
                <div className={classes.followerListItem}>
                    <div className={classes.followerLight} style={{backgroundColor:`${chartColors[2]}`}}>
                    </div>
                    <Typography variant="caption" className={classes.opacityText}>Tiktok</Typography>
                    <div className={classes.grow}/>
                    <Typography variant="caption" className={classes.opacityText}>4.3M</Typography>
                </div>
            </div>
        </Card>
    )
}
export default FollowerWidget
