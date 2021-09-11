// Main React Package
import { React, useState, Fragment } from 'react';
// React-Router-Dom-Package
import { BrowserRouter as Router, Route, Switch, Redirect, Link, } from 'react-router-dom';
// NPM Packages
import clsx from 'clsx';
// Custom Components
import NavBar from '../component/NavBar/NavBar';
import NavBarDetails from '../component/NavBar/NavBarDetails';


// MUI Styling Package
import { makeStyles } from '@material-ui/core/styles';
import { useStyles } from '../styling/useStyles';
import { customTheme } from '../styling/customTheme';
// MUI Core Packages
import {
    Card, CardContent, Typography, Button, TextField, Breadcrumbs, Grid, ThemeProvider,
    InputAdornment, createTheme, MenuItem, Select, InputLabel, FormControl, Table, TableBody,
    AppBar, Toolbar, IconButton, List, Divider, ListItem, ListItemIcon, ListItemText, 
    TableCell, TableContainer, TableHead, TableRow, Paper, SwipeableDrawer, Fab,
} from '@material-ui/core';
// MUI Icons
import PeopleIcon from '@material-ui/icons/People'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import GavelIcon from '@material-ui/icons/Gavel';

// Icons
import { BsHammer } from 'react-icons/bs';
import { AiOutlineGoogle } from 'react-icons/ai';
// Firebase Stuff

export {
    // NPM Packages
    clsx, Fragment,

    // Main React Package
    React, useState,

    // React-Router-Dom-Package 
    Link, Router, Route, Switch, Redirect,

    // Custom Components
    NavBar, NavBarDetails,
    
    // MUI Styling Package
    useStyles, customTheme, makeStyles,

    // MUI Core Packages
    Card, CardContent, Typography, Button, TextField, Breadcrumbs, Grid, ThemeProvider,
    InputAdornment, createTheme, MenuItem, Select, InputLabel, FormControl, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, Paper, SwipeableDrawer,
    AppBar, Toolbar, IconButton, List, Divider, ListItem, ListItemIcon, ListItemText,
    Fab,
    // MUI Icons
    PeopleIcon, AddIcon, DeleteIcon, InboxIcon, MailIcon, AccountCircleIcon, MenuIcon,
    CloseIcon, GavelIcon,
    // Icons
    AiOutlineGoogle, BsHammer,

    // Firebase Stuff
}