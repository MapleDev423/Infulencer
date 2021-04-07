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
    
    arrowIcon:{
        color:theme.palette.green.color
    },
    cardContent:{
        margin:-theme.spacing(2),
        marginTop:'0px',
        borderTop:'1px solid rgba(0,0,0,0.2)',
        paddingLeft:theme.spacing(3),
        paddingRight:theme.spacing(3),

    },
    followerList:{
        margin:-theme.spacing(2)
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


const FollowerWidget  = () =>{
    const classes = useStyles();
    const theme = useTheme();

    const chartColors = [
        theme.palette.blue.color,
        theme.palette.purple.color,
        theme.palette.green.color,
    ];
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
                borderWidth:1,
                //weight:1500,
                cutoutPercentage:60
            },
        ]
      };
    return(
        <Card>
            <CardHeader
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon color='primary'/>
                </IconButton>
                }
                titleTypographyProps={{variant:'subtitle1' }}
                title="Total Followers"
                subheaderTypographyProps={{variant:'subtitle1',color:'primary' }}
                subheader=""
            />
            <CardContent className={classes.cardContent}>
                
                <div className={classes.progresInfo}>
                    <div>
                    <Typography variant='h4'>5.8M<ArrowUpwardIcon className={classes.arrowIcon} ></ArrowUpwardIcon></Typography>
                    <Typography variant='subtitle2' color="primary">Total Followers</Typography>
                    </div>
                  
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
