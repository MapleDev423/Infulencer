import React, { useState, useEffect } from "react";
import {Line} from 'react-chartjs-2';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  IconButton

} from "@material-ui/core"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme)=>({
  customCardHeader:{
      display:'flex',
      marginBottom:theme.spacing(1)
  },
  customCardHeaderTab:{
      marginLeft:theme.spacing(2),
      display:'flex'
    //   marginTop:theme.spacing(1),
  },
  customCardHeaderTabItem:{
      marginLeft:theme.spacing(2),
      marginRight:theme.spacing(2),
      cursor:'pointer',
      opacity:'.5'
  },
  customCardHeaderTabItemActive:{
      marginLeft:theme.spacing(2),
      marginRight:theme.spacing(2),
      cursor:'pointer'
  },
  grow:{
    flexGrow: 1,
  },
  typeRow:{
      display:'flex',
      //marginTop:theme.spacing(2),
  },
  typeItem:{
    display:'flex',
    marginRight:theme.spacing(3),
    alignItems:'center',
    fontSize:'12px',
    '& span':{
        fontWeight:'500',
      opacity:'.5'

    }

      
  },
  typeItemAvatar:{
      width:theme.spacing(2),
      height:theme.spacing(2),
      borderRadius:'50%',
      marginRight:theme.spacing(1)
  },
  chartPart:{
      //padding:'0px 80px 0px 80px'
      //paddingTop:theme.spacing(3),
    //  paddingLeft:theme.spacing(10),
    //  paddingRight:theme.spacing(10),

  }
}))

const statisticsType=[
  {
      text:'All Time'
  },
  {
      text:'Today'
  },
  {
      text:'This Week'
  },
  {
      text:'This Month'
  },
  {
      text:'This Year'
  },
]


const StatisticWidget = () =>{
  const classes = useStyles();
  const [currentStatisticType,setCurrentStatisticType] = useState(0)
  const theme = useTheme();

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'Aug' ,'Sep', 'Oct', 'Nov' , 'Dec'],
    datasets: [
      {
        label: 'Sales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'white',
        borderColor: `${theme.palette.green.color}`,
        borderWidth:2,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: `${theme.palette.green.color}`,
        pointBackgroundColor: `${theme.palette.green.color}`,
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: `${theme.palette.green.color}`,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: [65, 59, 55, 66, 56, 55, 60,64,53,54,45,54]
      },
      {
        label: 'Visits',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'white',
        borderColor: `${theme.palette.purple.color}`,
        borderWidth:2,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        //pointBorderColor: '#666fe7',
        pointBackgroundColor: `${theme.palette.purple.color}`,
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: `${theme.palette.purple.color}`,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: [45, 49, 60, 50, 55, 45, 40,58,43,48,53,46]
      }
    ]
  };
    return(
        <Card>
            <CardContent>
                <div className={classes.customCardHeader}>
                    <Typography variant="subtitle1">Statistic</Typography>
                    <div className={classes.customCardHeaderTab}>
                        {statisticsType.map((type,index)=>{

                            return(
                                <Typography
                                        className={
                                            currentStatisticType == index ? classes.customCardHeaderTabItemActive : classes.customCardHeaderTabItem
                                        } 
                                        variant="subtitle1"
                                        onClick={()=>{
                                            setCurrentStatisticType(index)
                                            }
                                        }
                                    >
                                        {type.text}
                                </Typography>
                            )
                        })}
                    </div>
                    <div className={classes.grow}/>
                    <div className={classes.customCardHeaderAction}>
                        <IconButton aria-label="settings">
                            <MoreVertIcon color='primary'/>
                        </IconButton>
                    </div>
                </div>
                <div className={classes.typeRow}>
                    <div className={classes.typeItem}>
                        <div className={classes.typeItemAvatar} style={{backgroundColor:`${theme.palette.green.color}`}}>
                        </div>
                        <span>SALES</span>
                    </div>
                    <div className={classes.typeItem}>
                        <div className={classes.typeItemAvatar}style={{backgroundColor:`${theme.palette.purple.color}`}}>
                        </div>
                        <span>SALES</span>
                    </div>
                </div>
                <div className={classes.chartPart}>
                <Line data={data} height={400} options={{ maintainAspectRatio: false }} />
                </div>
            </CardContent>
        </Card>
    )
}
export default StatisticWidget