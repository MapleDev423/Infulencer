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
      marginBottom:theme.spacing(3)
  },
  customCardHeaderTab:{
      marginLeft:theme.spacing(2),
      marginTop:theme.spacing(1),
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
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'Aug' ,'Sep', 'Oct', 'Nov' , 'Dec'],
    datasets: [
      {
        label: 'My First dataset',
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
      {
        label: 'My Second dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(34,57,192,0.4)',
        borderColor: '#666fe7',
        borderWidth:2,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        //pointBorderColor: '#666fe7',
        pointBackgroundColor: 'white',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 6,
        pointHitRadius: 10,
        data: [45, 49, 60, 32, 36, 45, 40,58,43,34,36,34]
      }
    ]
  };

const StatisticWidget = () =>{
  const classes = useStyles();
  const [currentStatisticType,setCurrentStatisticType] = useState(0)

    return(
        <Card>
            <CardContent>
                <div className={classes.customCardHeader}>
                    <Typography variant="h5">Statistic</Typography>
                    <div className={classes.customCardHeaderTab}>
                        {statisticsType.map((type,index)=>{

                            return(
                                <Typography 
                                        className={
                                            currentStatisticType == index ? classes.customCardHeaderTabItemActive : classes.customCardHeaderTabItem
                                        } 
                                        variant="subtitle"
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
                <Line data={data} />
            </CardContent>
        </Card>
    )
}
export default StatisticWidget