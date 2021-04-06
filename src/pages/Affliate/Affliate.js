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
    Table,
    TableBody ,
    TableCell ,
    TableContainer ,
    TableHead ,
    TableRow ,
    Paper
} from "@material-ui/core"
import PageNavbarContent from '../../component/PageNavbarContent'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import {Line} from 'react-chartjs-2';

const useStyles = makeStyles((theme)=>({
    rightPan:{
   //     padding:theme.spacing(3),
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
    tablePart:{
        marginTop:theme.spacing(5)
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
const tableRows = [
    {
        order:1,
        order_date:'04/03/2021',
        order_total:12,
        member:5,
        code_link:'https://test.com',
        commission:'commission',
        payment:'$100.00'
    },
    {
        order:2,
        order_date:'02/07/2021',
        order_total:12,
        member:5,
        code_link:'https://test.com',
        commission:'commission',
        payment:'$100.00'
    },
    {
        order:3,
        order_date:'04/03/2021',
        order_total:12,
        member:5,
        code_link:'https://test.com',
        commission:'commission',
        payment:'$100.00'
    },
    {
        order:4,
        order_date:'04/03/2021',
        order_total:12,
        member:5,
        code_link:'https://test.com',
        commission:'commission',
        payment:'$100.00'
    },
];
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'Aug' ,'Sep', 'Oct', 'Nov' , 'Dec'],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'white',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth:2,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'white',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 6,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 60,88,53,54,86,54]
      },
      
    ]
  };
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
                    {/* <CardContent> */}
                        <PageNavbarContent data={pageNavListData}/>

                    {/* </CardContent> */}
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
                                    color="secondary"
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
                                                <Typography variant="h5">$0.00</Typography>
                                                <Typography variant="subtitle">Total sales</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className={classes.affliateItem}>
                                                <Typography variant="h5">$0.00</Typography>
                                                <Typography variant="subtitle">Commission</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className={classes.affliateItem}>
                                                <Typography variant="h5">$0.00</Typography>
                                                <Typography variant="subtitle">Paid</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <div className={classes.affliateItem}>
                                                <Typography variant="h5">$0.00</Typography>
                                                <Typography variant="subtitle">Owed</Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Line data={data} />
                                </Grid>
                                <Grid item xs={12}>
                                    <div className={classes.tablePart}>
                                        <Typography>{tableRows.length} conversions</Typography>
                                        <TableContainer component={Paper}>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell><Typography variant="subtitle1">ORDER</Typography></TableCell>
                                                        <TableCell align="right"><Typography variant="subtitle1">ORDER DATE</Typography></TableCell>
                                                        <TableCell align="right"><Typography variant="subtitle1">ORDER TOTAL</Typography></TableCell>
                                                        <TableCell align="right"><Typography variant="subtitle1">MEMBER</Typography></TableCell>
                                                        <TableCell align="right"><Typography variant="subtitle1">CODE/LINK</Typography></TableCell>
                                                        <TableCell align="right"><Typography variant="subtitle1">COMMISSION</Typography></TableCell>
                                                        <TableCell align="right"><Typography variant="subtitle1">PAYMENT</Typography></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                   
                                                {tableRows.map((row) => (
                                                    <TableRow key={row.order}>
                                                    <TableCell align="left">{row.order}</TableCell>

                                                    <TableCell align="right" component="th" scope="row">
                                                        {row.order_date}
                                                    </TableCell>
                                                    <TableCell align="right">{row.order_total}</TableCell>
                                                    <TableCell align="right">{row.member}</TableCell>
                                                    <TableCell align="right">{row.code_link}</TableCell>
                                                    <TableCell align="right">{row.commission}</TableCell>
                                                    <TableCell align="right">{row.payment}</TableCell>

                                                    </TableRow>
                                                ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
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
export default Affliate
