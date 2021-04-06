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
    TextField,
    InputAdornment,
    Menu,
    MenuItem,
    Table,
    TableBody ,
    TableCell ,
    TableContainer ,
    TableHead ,
    TableRow ,
    Paper

} from "@material-ui/core"
import Fade from '@material-ui/core/Fade';

import SearchIcon from '@material-ui/icons/Search';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    pan:{
    //    padding:theme.spacing(3),

    },
    panTitle:{
        alignItems:'center',
        '& button':{
            margin:theme.spacing(1)
        },
        '& .searchBox':{
            margin:theme.spacing(1)
        },
        [theme.breakpoints.up('lg')]: {
            display:'flex',
        }
    },
    titleTool:{
        //display:'flex',
        [theme.breakpoints.up('md')]: {
            display:'flex',
        }
    },
    grow:{
        flexGrow: 1,
    },
 
    panInfo:{
        marginTop:theme.spacing(5)
    },
    avatarCell:{
        display:'flex'
    },
    avatar:{
        width:theme.spacing(7),
        height:theme.spacing(7),
    },
    avatarName:{
        paddingLeft:theme.spacing(2)
    }
}))
const dropDownList = [
    {
        text:'Sales:Last 30 days',
    },
    {
        text:'Sales:Last 6 months',
    },
    {
        text:'Sales:Last 1 year',
    },
]
const tableRows = [
    {
        id:1,
        member_link:'/1.jpg',
        member_name:'CenoPant',
        member_sub_name:'ceno pant',
        verified:0,
        followers:165,
        gifts:'gifts',
        affilate_offer:'offer',
        total_sales:0
    },
    {
        id:2,
        member_link:'/1.jpg',
        member_name:'CenoPant',
        member_sub_name:'ceno pant',
        verified:0,
        followers:165,
        gifts:'gifts',
        affilate_offer:'offer',
        total_sales:0
    },
]
const Community = () =>{
    const classes = useStyles();
    //const [showSaleDropDown,setShowDropDown] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const openDropDown = Boolean(anchorEl);

    const [currentDropDown,setCurrentDropDown] = useState(0)
    const handleDropDownClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleDropDownClose = () => {
        setAnchorEl(null);
    };
    return(
        <Card>
            <CardContent>
                <div className={classes.pan}>
                    <div className={classes.panTitle}>
                        <Typography variant="h5">Members(1)</Typography>
                        <div className={classes.grow}/>
                        <div className={classes.titleTool}>
                            <TextField
                                fullWidth
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                        ),
                                    }}
                                placeholder="Search"
                                className="searchBox"
                            
                            />
                            <Button
                                variant="outlined"
                                color="secondary"
                                fullWidth
                            >
                                Export
                            </Button>
                            <Button 
                                fullWidth
                                aria-controls="fade-menu" 
                                aria-haspopup="true" 
                                onClick={handleDropDownClick}
                                variant="outlined"
                                color="secondary"
                                //className={classes.dBtn}
                            >
                                {dropDownList[currentDropDown].text}
                            </Button>
                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={openDropDown}
                                onClose={handleDropDownClose}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={()=>{
                                    handleDropDownClose()
                                    setCurrentDropDown(0)

                                }}>{dropDownList[0].text}</MenuItem>
                                <MenuItem onClick={()=>{
                                    handleDropDownClose()
                                    setCurrentDropDown(1)

                                }}>{dropDownList[1].text}</MenuItem>
                                <MenuItem onClick={()=>{
                                    handleDropDownClose()
                                    setCurrentDropDown(2)
                                }}>{dropDownList[2].text}</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className={classes.panInfo}>
                        <TableContainer component={Paper}>
                            <Table  aria-label="simple table">
                                <TableHead>
                                    
                                    <TableRow>
                                        <TableCell align="center"><Typography variant="subtitle1">MEMBER</Typography></TableCell>
                                        <TableCell align="center"><Typography variant="subtitle1">VERIFIED</Typography></TableCell>
                                        <TableCell align="center"><Typography variant="subtitle1">FOLLOWERS</Typography></TableCell>
                                        <TableCell align="center"><Typography variant="subtitle1">GIFTS</Typography></TableCell>
                                        <TableCell align="center"><Typography variant="subtitle1">AFFLIATE OFFERS</Typography></TableCell>
                                        <TableCell align="center"><Typography variant="subtitle1">TOTAL SALES</Typography></TableCell>
                                    </TableRow>
                                    
                                </TableHead>
                                <TableBody>
                                {tableRows.map((row) => (
                                    <TableRow key={row.id}>
                                    <TableCell align="center">
                                        <div className={classes.avatarCell}>
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
                                    </TableCell>
                                    <TableCell align="center">{row.verified}</TableCell>
                                    <TableCell align="center">{row.followers}</TableCell>
                                    <TableCell align="center">{row.gifts}</TableCell>
                                    <TableCell align="center">{row.affilate_offer}</TableCell>
                                    <TableCell align="center">{row.total_sales}</TableCell>

                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default Community