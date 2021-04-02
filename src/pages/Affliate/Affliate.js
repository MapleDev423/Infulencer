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
import PageNavbarContent from '../../component/PageNavbarContent'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const Affliate = () =>{
    const [currentTab,setCurrentTab] = useState(0)

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
        </Grid>
    )
}
export default Affliate
