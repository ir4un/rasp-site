import {
  // Main React Package
  React, clsx, useState, Fragment,
  // Custom Components
  // React Router Dom
  // MUI Styling Package
  useStyles,
  // MUI Core Packages
  SwipeableDrawer, List, ListItemText, ListItem,
  AppBar, Toolbar, Typography, IconButton, Fab,
  // Icons
  BsHammer, AccountCircleIcon

} from '../../imports/imports';
import ListIconsDisplay from './NavBarDetails';
const NavBarList1 = ['Close', 'Home', 'Posts', 'About Us'];

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const handleDrawerOpen = () => {
    setOpen(true);
    setClose(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setClose(true);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ background: 'linear-gradient(to right bottom, #1F4068, #1B1B2F)' }}
    >
      <List >
        {NavBarList1.map((text, index) => (
          <ListItem button key={text} style={{ color: "white" }}>
            <ListIconsDisplay index={index} />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <AppBar
      position="fixed"
      color="#fff"
      className={classes.appbar}
    >
      <Toolbar style={{ background: 'linear-gradient(to right bottom, #1F4068, #1B1B2F)' }}>
        <Typography variant="h6" noWrap style={{ color: "white" }} classes={classes.typography}>
          RES-PITE
        </Typography>
        {['bottom'].map((anchor) => (
          <Fragment key={anchor}>
            <Fab
              color="secondary"
              aria-label="add"
              className={classes.fabButton}
              onClick={toggleDrawer(anchor, true)}
            >
              <BsHammer size={25}/>
            </Fab>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
              classes={{ paper: classes.paper }}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </Fragment>
        ))}
        <div className={classes.root} />
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          style={{ color: "white" }}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}