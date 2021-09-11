import React from 'react'
import { Button, Paper, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useStyles } from '../../styling/useStyles';
import me from '../../images/me.jpg';

export default function Landing() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.landingBanner}>
                <Typography className={classes.landingBannerText} variant="h1">
                    Welcome To My Website!
                </Typography>
            </Paper>
            <Paper className={classes.Card}>
                <img className={classes.Media} src={me} alt={"User"} />
            </Paper>
        </div>
    )
}
