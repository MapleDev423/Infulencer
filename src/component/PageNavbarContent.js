import React, { useState, useEffect } from "react";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Typography,
} from "@material-ui/core"
import PageNavbarSearchComponent from './PageNavbarSearchComponent'

const useStyles = makeStyles((theme)=>({
    listGroup:{
        '& .active':{
            backgroundColor:'rgb(247,250,252)',
            borderRadius:'3px',
        }
    },
    listItem:{
        display:'flex',
        //backgroundColor:'black',
        cursor:'pointer',
        padding:theme.spacing(2),

        '& p':{
            //paddingRight:theme.spacing(1),
            paddingBottom:'0px',
        },
        '&:hover':{
            backgroundColor:'rgb(247,250,252)',
            borderRadius:'3px',
        },
    },
    listItemAvatar:{
        paddingRight:theme.spacing(1)
    },
    listItemDivider:{
        height: '5px',
        backgroundColor: 'rgb(245,245,245)',
        marginLeft: '-20px',
        marginRight: '-20px',
        marginBottom:'15px',
        marginTop:'15px',
    },
    grow:{
        flexGrow: 1,
    },
}))
/**
 * 
 * item.type
 * 0:normal list
 * 1:divider
 * 2:search creater
 */

const PageNavbarContent = (props) =>{
    const classes = useStyles();
    const {data} = props;
   // console.log(data)

    return(
        <div className={classes.listGroup}>
            {data.data.map((item,index)=>{
                if(item.type == 0){
                    let itemClass = classes.listItem;
                   // console.log(item.index)
                    itemClass = item.index == data.currentTab ? itemClass + ' ' + 'active' : itemClass;

                    return(
                        <div className={itemClass} onClick={item.action}>
                            <Typography className={classes.listItemAvatar}>{item.avatar}</Typography>
                            <Typography variant="subtitle1">{item.text}</Typography>
                            <div className={classes.grow}/>
                            {item.number && (
                                <Typography>{item.number}</Typography>
                            )}
                            
                        </div>        
                    )
                }else if(item.type == 1){
                    return(
                        <div className={classes.listItemDivider}/>
                    )
                }else if(item.type == 2){
                    return(
                        <div>
                            <PageNavbarSearchComponent/>
                        </div>
                    )
                }
                
            })}
        </div>
    )
}
export default PageNavbarContent