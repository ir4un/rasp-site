import {
    // Main React Package
    React,
    // Custom Components
    // React Router Dom
    // MUI Styling Package
    // MUI Core Packages
    ListItemIcon,
    // Icons
    MailIcon, AccountCircleIcon, MenuIcon,
    CloseIcon,
} from '../../imports/imports';

export default function ListIconsDisplay(props) {

    return (
        <div>
            <ListItemIcon style={{ color: "white" }}>
                {props.index === 0 ? <CloseIcon /> : ""}
                {props.index === 1 ? <AccountCircleIcon /> : ""}
                {props.index === 2 ? <MenuIcon /> : ""}
                {props.index === 3 ? <MailIcon /> : ""}
            </ListItemIcon>
        </div>
    );
}


