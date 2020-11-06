import React from 'react';
import { Typography, Avatar} from '@material-ui/core';
//Icons
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WorkIcon from '@material-ui/icons/Work';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PublicIcon from '@material-ui/icons/Public';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import SchoolIcon from '@material-ui/icons/School';
import {ExpansionPanelSummary} from '@material-ui/core'; 

function iconSelected(selected) {
    switch(selected){
        case '1': return <SchoolIcon/>;
        case '2': return <WorkIcon/>;
        case '3': return <PublicIcon/>;
        case '4': return <KeyboardIcon/>;
        case '5': return <DesktopWindowsIcon/>;
        case '6': return <AddCircleRoundedIcon/>;
        case '7': return <MenuBookIcon/>;
        default: return <AddCircleRoundedIcon/>
    };
}

export function Heading(props, title, selected) {
    const { classes, t } = props;

    return (
            <ExpansionPanelSummary className={classes.expansionSummary} 
                expandIcon={<ExpandMoreIcon />}>
                <Avatar className={classes.small, classes.icon}> 
                    {iconSelected(selected)}
                </Avatar>
                <Typography className={classes.heading}>{t(title)}</Typography>
            </ExpansionPanelSummary>
    );
}