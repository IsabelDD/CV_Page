import React from 'react';
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
//Material-ui
import { Typography, Avatar} from '@material-ui/core';
import {ExpansionPanel, ExpansionPanelDetails } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';

const programms_array = ["Programm1", "Programm2", "Programm3", "Programm4", "Programm5", "Programm6", 
"Programm7", "Programm8", "Programm9"];
const tools_array = ["Tool1", "Tool2","Tool3","Tool4","Tool5","Tool6","Tool7"];
const skills_array = ["Skill1", "Skill2", "Skill3", "Skill4"];
const studies_array = ["Studies1", "Studies2"];
const curses_array = ["Curse1", "Curse2", "Curse3"];
const languages_array = ["Language1", "Language2", "Language3"];
const jobs_array = ["Job1"];

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

export function ExpansionPanelList(props, title, selected) {
    const { classes, t } = props;

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary className={classes.expansionSummary} 
                expandIcon={<ExpandMoreIcon />}>
                <Avatar className={classes.small, classes.icon}> 
                    {iconSelected(selected)}
                </Avatar>
                <Typography className={classes.heading}>{t(title)}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <List>
                    {CreateList(props, title)}
                </List>
            </ExpansionPanelDetails>
        </ExpansionPanel>

        );
}

export function CreateList(props, object) {
    const { classes, t } = props;

    var array = null;

    if(object=='Programms') {
        array = programms_array;
    }else if (object == 'Tools') {
        array = tools_array;
    }else if (object == 'Skills') {
        array = skills_array;
    }else if (object == 'Studies') {
        array = studies_array;
    }else if (object == 'Languages') {
        array = languages_array;
    }else if (object == 'Curses') {
        array = curses_array;
    }else if (object = 'Jobs') {
        array = jobs_array;
    }
    
    return array.map( (element) =>
                    <ListItem className={classes.ul}>
                        <Typography>{t(element)}</Typography>
                    </ListItem> )
    
}