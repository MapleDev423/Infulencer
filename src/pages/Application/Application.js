import React, { useState, useEffect } from "react";
import {
    Button,
    Grid,
    Typography,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    IconButton,
} from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';

import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
// import { QuestionAnswerRounded } from "@material-ui/icons";
import PageNavbarContent from '../../component/PageNavbarContent'
const useStyles = makeStyles((theme)=>({
    
    greyBackground:{
        backgroundColor:'rgb(238,242,246)'
    },
    memberType:{
        paddingTop:theme.spacing(4)
    },
    memberItem:{
        display:'flex',
        alignItems: 'center',
        marginBottom:theme.spacing(1),
        '& .green':{
            backgroundColor:'rgb(104,212,145)'
        },
        '& .yellow':{
            backgroundColor:'rgb(241,153,73)'
        },
        '& .grey':{
            backgroundColor:'rgb(204,213,223)'
        },
        '& p':{
            margin:'0px',
            padding:'0px'
        }
    },
    memberItemLight:{
        borderRadius:'5px',
        width:theme.spacing(2),
        height:theme.spacing(2),
        marginRight:theme.spacing(2)
    }
}))

const Application = () =>{
    const classes = useStyles();
    const [currentTab,setCurrentTab] = useState(0)
    useEffect(()=>{
        //alert('asdf')
        console.log(currentTab)
    },[currentTab])
    const pageNavListData = {
        data:[
            {
                type:0,
                text:'New Applicatoins',
                avatar:<PeopleAltOutlinedIcon></PeopleAltOutlinedIcon>,
                action:()=>{
                    setCurrentTab(0)
                },
                index:0,
                number:1,
            },
            {
                type:1
            },
            {
                type:0,
                text:'Maybe',
                avatar:<HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>,
                action:()=>{
                    setCurrentTab(1)
                },
                index:1,
                number:0,
                
            },
            {
                type:0,
                text:'Interested',
                avatar:<StarBorderIcon></StarBorderIcon>,
                action:()=>{
                    setCurrentTab(2)
                },
                index:2,
                number:0,
            },
            {
                type:1
            },
            {
                type:0,
                text:'Rejected',
                avatar:<CloseOutlinedIcon></CloseOutlinedIcon>,
                action:()=>{
                    setCurrentTab(3)
                },
                index:3,
                number:0,
            },
            {
                type:0,
                text:'Approved',
                avatar:<CheckOutlinedIcon></CheckOutlinedIcon>,
                action:()=>{
                    setCurrentTab(4)
                },
                index:4,
                number:0,
            },

        ],
        currentTab:currentTab
}
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <PageNavbarContent data={pageNavListData}/>
                            </CardContent>    
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card className={classes.greyBackground}>
                            <CardContent>
                                <Typography>0 / 5 members</Typography>  
                                <div>UnknownProgrss</div>  
                                <div className={classes.memberType}>
                                    <div className={classes.memberItem}>
                                        <div className={classes.memberItemLight + ' ' + 'green'}>
                                        </div>
                                        <Typography>Active members</Typography>
                                    </div>
                                    <div className={classes.memberItem}>
                                        <div className={classes.memberItemLight + ' ' + 'yellow'}>
                                        </div>
                                        <Typography>Invited members</Typography>
                                    </div>
                                    <div className={classes.memberItem}>
                                        <div className={classes.memberItemLight + ' ' + 'grey'}>
                                        </div>
                                        <Typography>Open spaces</Typography>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
                <Card>
                    <CardContent>
                        ANCD
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
export default Application