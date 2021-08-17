import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  topBar: {
    backgroundColor: 'rgb(191, 10, 48)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  landingBanner: {
    padding: 10,
    marginBottom: 10,
  },
  landingBannerText: {
    textAlign: "center",
  },
  LandingContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  imgPaper: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    padding: 10,

  },
}));

