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
    Menu,
    MenuItem,
} from "@material-ui/core"
import PageNavbarContent from '../../component/PageNavbarContent'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
    panContent:{
        marginTop:theme.spacing(2)
    },
    affliateItem:{
        backgroundColor: 'rgb(246,248,250)',
        borderRadius:'10px',
        padding:theme.spacing(2),
        textAlign:'center',
        '& h5':{
            color:theme.palette.primary.dark
        }
    },
}))
const dateType = [
    {
        text:'Last 30 days',
    },
    {
        text:'Last 6 months',
    },
    {
        text:'Last year',
    },
]
const Affliate = () =>{
    const [currentTab,setCurrentTab] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null);
    const [currentDayType,setCurrentDayType] = useState(0)
    const openDropDown = Boolean(anchorEl);

    const classes = useStyles();

    const handleDropdownClick = (event) => {
        setAnchorEl(event.currentTarget);
        //console.log(event.currentTarget)
    };
    const handleDropdownClose = () => {
        setAnchorEl(null);
    };
 
    const pageNavListData = {
        data:[
            {
                type:0,
                text:'Conversions',
                avatar:<AttachMoneyIcon></AttachMoneyIcon>,
                action:()=>{
                    setCurrentTab(0)
                },
                index:0
            },
            {
                type:0,
                text:'Affliates',
                avatar:<PeopleAltOutlinedIcon></PeopleAltOutlinedIcon>,
                action:()=>{
                    setCurrentTab(1)
                },
                index:1
            },
            {
                type:0,
                text:'Offers',
                avatar:<AttachMoneyIcon></AttachMoneyIcon>,
                action:()=>{
                    setCurrentTab(2)
                },
                index:2
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
                                <Typography variant="h5">Affliate Conversions</Typography>
                                <div className={classes.grow}/>
                                <Button 
                                    aria-controls="fade-menu" 
                                    aria-haspopup="true" 
                                    onClick={handleDropdownClick}
                                    variant="outlined"
                                    color="primary"
                                    //className={classes.dBtn}
                                >
                                    {dateType[currentDayType].text}
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={openDropDown}
                                    onClose={handleDropdownClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem onClick={(e)=>{
                                        handleDropdownClose(e)
                                        setCurrentDayType(0)
                                    }
                                    }>Last 30 days</MenuItem>
                                    <MenuItem onClick={(e)=>{
                                        handleDropdownClose(e)
                                        setCurrentDayType(1)
                                    }
                                    }>Last 6 months</MenuItem>
                                    <MenuItem onClick={(e)=>{
                                        handleDropdownClose(e)
                                        setCurrentDayType(2)
                                    }
                                    }>Last 1 year</MenuItem>
                                    
                                </Menu>
                            </div>
                            <Grid container className={classes.panContent}>
                                <Grid item xs={6}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <div className={classes.affliateItem}>
                                                <Typography variant="h5">165</Typography>
                                                <Typography variant="subtitle">Followers</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className={classes.affliateItem}>
                                                <Typography variant="h5">165</Typography>
                                                <Typography variant="subtitle">Followers</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className={classes.affliateItem}>
                                                <Typography variant="h5">165</Typography>
                                                <Typography variant="subtitle">Followers</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className={classes.affliateItem}>
                                                <Typography variant="h5">165</Typography>
                                                <Typography variant="subtitle">Followers</Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    
                                </Grid>
                            </Grid>
                            
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
export default Affliate
