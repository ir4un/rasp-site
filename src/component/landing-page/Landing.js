import React from 'react'
import { Button, Paper, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useStyles } from '../../styling/useStyles';
import me from '../../images/me.jpg';

export default function Landing() {
    const classes = useStyles();
    return (
        <div className={classes.LandingContent}>
            <Paper className={classes.landingBanner}>
                <Typography className={classes.landingBannerText} variant="h1">
                    Welcome To My Website!
                </Typography>
            </Paper>
            <Paper className={classes.imgPaper}>
                <img src={me} alt={"User"} height={500} width={500} />
            </Paper>
        </div>
    )
}
