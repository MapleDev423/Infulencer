import React, { useState, useEffect } from "react";

import {
    Box,
    Button,
    Grid,
    Typography,
    Avatar,
    Card,
    CardContent
    
} from "@material-ui/core"

const TestPage = () =>{
    return(
        <>
        <Card>
            <CardContent>
            <Typography color='primary'>
                without
            </Typography>
            <Typography color='primary' variant="h1">
                h1 Text
            </Typography>
            <Typography color='primary' variant="h2">
                h2 Text
            </Typography>
            <Typography color='primary' variant="h3">
                h3 Text
            </Typography>
            <Typography color='primary' variant="h4">
                h4 Text
            </Typography>
            <Typography color='primary' variant="h5">
                h5 Text
            </Typography>
            <Typography color='primary' variant="subtitle1">
                subtitle1
            </Typography>
            <br/>

            <Typography color='primary' variant="subtitle2">
                subtitle2
            </Typography>
            <br/>

            <Typography color='primary' variant="body1">
                body1
            </Typography>
            <br/>

            <Typography color='primary' variant="body2">
            body2
            </Typography>
            <br/>

            <Typography color='primary' variant="button">
            button
            </Typography>
            <br/>
            <Typography color='primary' variant="caption">
            caption
            </Typography>
            <br/>

            <Typography color='primary' variant="overline">
            overline
            </Typography>
            </CardContent>
        </Card>
        </>
    )
}
export default TestPage