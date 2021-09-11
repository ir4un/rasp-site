import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  '@global':{
    body:{
      backgroundColor:"#162447"
    }
},
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
    color: "white",
    backgroundColor: "#E43F5A",
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
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  hide: {
    display: 'none',
  },
  paper: {
    background: 'linear-gradient(to right bottom, #1F4068, #1B1B2F)'
  },
  typography: {
    flexGrow: 1,
    align: "center"
  },
  appbar: {
    top: 'auto',
    bottom: 0,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },

  Card: {
    backgroundColor: "#E43F5A",
    width: 500,
    margin: 'auto',
    padding:10,
  },
  Media: {
    height: "100%",
    width: '100%',
    objectFit: 'cover'
  }
  
}));

