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
        //backgroundColor:'rgb(238,242,246)'
    },
    memberType:{
        paddingTop:theme.spacing(4)
    },
    memberItem:{
        display:'flex',
        alignItems: 'center',
        marginBottom:theme.spacing(1),
        '& .green':{
            backgroundColor:theme.palette.green.color
        },
        '& .yellow':{
            backgroundColor:theme.palette.yellow.color
        },
        '& .grey':{
            backgroundColor:theme.palette.primary.main
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
    },
    rightPan:{
       // padding:theme.spacing(3),
        [theme.breakpoints.up('lg')]: {
            display:'flex',   
        },
    },
    actionBtnList:{
        [theme.breakpoints.down('md')]: {
            textAlign: '-webkit-center',
            display:'flex',
            marginBottom:theme.spacing(3)
        },
    },
    actionBtn:{
        width:theme.spacing(10),
        height:theme.spacing(10),

        borderRadius:'10px',
        border:`3px solid ${theme.palette.primary.main}`,
        textAlign:'center',
      
        cursor:'pointer',

        '& :hover':{
            //border:`5px solid ${theme.palette.primary.main}`,
        },
        marginBottom:theme.spacing(3),
        padding:'10px 5px 5px 5px',
        '& p':{
            marginTop:'0px'
        },
        [theme.breakpoints.down('md')]: {
            margin:theme.spacing(1)
        },
        '& .green':{
            color:theme.palette.green.color
        },
        '& .grey':{
            color:theme.palette.primary.main
        },
        '& .blue':{
            color:theme.palette.secondary.main
        },
        '& .yellow':{
            color:theme.palette.yellow.color
        },
    },
    avatar:{
        width:theme.spacing(12),
        height:theme.spacing(12),
        marginRight:theme.spacing(3)
    },
    rightPanInfo:{
        [theme.breakpoints.up('lg')]: {
            marginLeft:theme.spacing(4),
        }

    },
    rightpanInfoName:{
        display:'flex',
        placeItems:'center',
        '& h5':{
            color:theme.palette.primary.dark
        }
    },
    imageBtn:{
        width: '100px',
        backgroundColor: theme.palette.pan.backgroundColor,
        textAlignLast: 'center',
        borderRadius:'15px',
        padding:theme.spacing(1),
        cursor:'pointer',
        '& p':{
            padding:'0px'
        },
        '& span':{
            color:theme.palette.primary.dark
        }
    },
    rightPanRow:{
        paddingTop:theme.spacing(2)
    },
    follerInfo:{
        backgroundColor: theme.palette.pan.backgroundColor,

        borderRadius:'10px',
        padding:theme.spacing(2),
        textAlign:'center',
        '& h5':{
            color:theme.palette.primary.dark
        }
    },
    imagePan:{
        display:'flex',
    },
    imagePanItem:{
        borderRadius:'10px',
        width:theme.spacing(25),
        height:theme.spacing(25),
        backgroundColor:theme.palette.primary.light,
        marginRight:theme.spacing(3)
    },
    messagePan:{
        backgroundColor: theme.palette.pan.backgroundColor,

        padding:theme.spacing(3),
        borderRadius:'10px'
    },
    messageItem:{
        marginBottom:theme.spacing(2)
    },
    messageQ:{
        color:theme.palette.primary.dark,
    },
    messageA:{
        color:theme.palette.primary.main,
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
                            {/* <CardContent> */}
                                <PageNavbarContent data={pageNavListData}/>
                            {/* </CardContent>     */}
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
                        <div className={classes.rightPan}>
                            <div className={classes.actionBtnList}>
                            
                                <div className={classes.actionBtn}>
                                    <Typography variant="subtitle1" className={'green'}>
                                        <CheckOutlinedIcon/>
                                        <p>Approve</p>
                                    </Typography>
                                    
                                </div>
                                <div className={classes.actionBtn}>
                                <Typography variant="subtitle1" className={'grey'}>
                                        <HelpOutlineOutlinedIcon/>
                                        <p>May be</p>
                                    </Typography>
                                </div>
                                <div className={classes.actionBtn}>
                                <Typography variant="subtitle1" className={'blue'}>
                                        <StarBorderIcon/>
                                        <p>Interested</p>
                                    </Typography>
                                </div>
                                <div className={classes.actionBtn}>
                                    <Typography variant="subtitle1" className={'yellow'}>
                                        <CloseOutlinedIcon/>
                                        <p>Reject</p>
                                    </Typography>
                                </div>
                            </div>
                            <Grid container className={classes.rightPanInfo}>
                                <Grid item xs={12} className={classes.rightPanRow}>
                                    <div className={classes.rightpanInfoName}>
                                        <Avatar alt="Remy Sharp" src="/1.jpg" className={classes.avatar} />
                                        <Typography variant="h5">Ceno Pant</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classes.rightPanRow}>
                                    <div className={classes.imageBtn}>
                                        <Typography variant="subtitle">cenopant</Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classes.rightPanRow}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4} >
                                            <div className={classes.follerInfo}>
                                                <Typography variant="h5">165</Typography>
                                                <Typography variant="subtitle">Followers</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div className={classes.follerInfo}>
                                                <Typography variant="h5">70</Typography>
                                                <Typography variant="subtitle">Avg.Likes</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <div className={classes.follerInfo}>
                                                <Typography variant="h5">53.52%</Typography>
                                                <Typography variant="subtitle">Engagement</Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} className={classes.rightPanRow}>
                                    <div className={classes.imagePan}>
                                        <div className={classes.imagePanItem}>
                                        </div>
                                        <div className={classes.imagePanItem}>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} className={classes.rightPanRow}>
                                    <div className={classes.messagePan}>
                                        <div className={classes.messageItem}>
                                        
                                            <Typography className={classes.messageA}>
                                                Applied on Mar 29 2021
                                            </Typography>
                                        </div>
                                        <div className={classes.messageItem}>
                                            <Typography className={classes.messageQ}>
                                                ceno@mileagency.com
                                            </Typography>
                                        </div>
                                        <div className={classes.messageItem}>
                                            <Typography className={classes.messageQ}>
                                                Have you made a purchase from us before?
                                            </Typography>
                                            <Typography className={classes.messageA}>
                                                Yes
                                            </Typography>
                                        </div>
                                        <div className={classes.messageItem}>
                                            <Typography className={classes.messageQ}>
                                                If you have purchased from us before, what did you love about the product?
                                            </Typography>
                                            <Typography className={classes.messageA}>
                                                Quality
                                            </Typography>
                                        </div>
                                        <div className={classes.messageItem}>
                                            <Typography className={classes.messageQ}>
                                                In 1 or 2 sentences, tell us why you'd love to be in our company?
                                            </Typography>
                                            <Typography className={classes.messageA}>
                                                Lorem lpsum
                                            </Typography>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                          
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
export default Application