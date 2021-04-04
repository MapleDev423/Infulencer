import React, { useState, useEffect } from "react";
import {
    Grid,
    Typography,
    Avatar,
    Card,
    CardContent,
    InputAdornment,
    TextField,
    Button,
    Menu,
    MenuItem,
    Checkbox,
} from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import PageNavbarContent from '../../component/PageNavbarContent'


import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme)=>({
    rightPan:{
        padding:theme.spacing(3),
    },
    panTitle:{
        display:'flex',
        alignItems:'center'

    },
    grow:{
        flexGrow: 1,
    },
    dBtn:{
        marginLeft:theme.spacing(1)
    },
    panContent:{

    },
    giftItem:{
        display:'flex',
//        backgroundColor:theme.palette.secondary.dark,
        backgroundColor:'rgb(247,250,252)',
        borderRadius:'10px',
        marginTop:theme.spacing(3),
        marginBottom:theme.spacing(3),
        padding:theme.spacing(2),
        alignItems:'center'
    },
    
    giftItemInfo:{
        display:'flex',
    },
    giftItemInfoImg:{
        width:theme.spacing(13),
        height:theme.spacing(13),
    },
    giftImteInfoText:{
        marginLeft:theme.spacing(1)
    },
    titleTool:{
        display:'flex'
    }
}))
const Gift = () =>{
    const [currentTab,setCurrentTab] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const openNew = Boolean(anchorEl);
    const classes = useStyles();

    const pageNavListData = {
        data:[
            {
                type:0,
                text:'All Gifts',
                avatar:<CardGiftcardOutlinedIcon></CardGiftcardOutlinedIcon>,
                action:()=>{
                    setCurrentTab(0)
                },
                index:0
            },
            {
                type:0,
                text:'Gift History',
                avatar:<LocalMallOutlinedIcon></LocalMallOutlinedIcon>,
                action:()=>{
                    setCurrentTab(1)
                },
                index:1
            },
            {
                type:1
            },
            {
                type:2
            }
        ],
        currentTab:currentTab

    }
    const handleNewClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleNewClose = () => {
        setAnchorEl(null);
    };
    return(
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
                <Card>
                    <CardContent>
                        <PageNavbarContent data={pageNavListData}/>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={9}>
                <Card>
                    <CardContent>
                        <div className={classes.rightPan}>
                            <div className={classes.panTitle}>
                                <Typography variant="h5">Gifts</Typography>
                                <div className={classes.grow}/>
                                <div className={classes.titleTool}>
                                    <TextField
                                        InputProps={{
                                            startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {/* <TextField/> */}
                                    <Button 
                                        aria-controls="fade-menu" 
                                        aria-haspopup="true" 
                                        onClick={handleNewClick}
                                        variant="contained"
                                        color="primary"
                                        className={classes.dBtn}
                                    >
                                        Create new gift
                                    </Button>
                                    <Menu
                                        id="fade-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={openNew}
                                        onClose={handleNewClose}
                                        TransitionComponent={Fade}
                                    >
                                        <MenuItem onClick={handleNewClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleNewClose}>My account</MenuItem>
                                        <MenuItem onClick={handleNewClose}>Logout</MenuItem>
                                    </Menu>
                                </div>
                            </div>
                            <div className={classes.panContent}>
                                {[1,2,3].map((item)=>{
                                    return(
                                    <div className={classes.giftItem}>
                                        <div>
                                            <Checkbox
                                                color="primary"
                                            ></Checkbox>
                                        </div>
                                        <div className={classes.giftItemInfo}>
                                            <img src="/1.jpg" className={classes.giftItemInfoImg}/>
                                            <div className={classes.giftImteInfoText}>
                                                <Typography variant="h6">Free</Typography>
                                                <Typography variant="subtitle1">Sent 0 items</Typography>
                                                <Button 
                                                    color="default"
                                                    // className={classes.dBtn}
                                                    // variant="contained"
                                                >
                                                    1 products
                                                </Button>
                                            </div>
                                        </div>
                                        <div className={classes.grow}/>
                                        <div>
                                            <Button 
                                                color="primary"
                                                className={classes.dBtn}
                                                variant="contained"
                                            >
                                                Send this gift
                                            </Button>
                                        </div>
                                        <div>
                                            <Button 
                                                color="default"
                                                className={classes.dBtn}
                                                variant="contained"
                                            >
                                                Actions
                                            </Button>
                                        </div>
                                    </div>
                                    )
                                    
                                })}
                                
                                
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
export default Gift
