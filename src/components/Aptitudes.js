import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
//Material-ui
import { withStyles } from '@material-ui/core';
import { Typography, Avatar } from '@material-ui/core';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import {List, ListItem } from '@material-ui/core';
//Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WorkIcon from '@material-ui/icons/Work';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PublicIcon from '@material-ui/icons/Public';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

const styles = theme => ({
    root : {
        width:"100%",
        marginTop: 30,
    },
    typography: {
        fontFamily: 'Raleway',
    },
    heading: {
        fontSize: 14,
        width: '80%',
        margin: theme.spacing(1),
    },
    expansion : {
        marginLeft:60,
        marginRight:60,
    },
    expansionSummary : {
        backgroundColor:'#dbe7e7',
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    icon :{
        backgroundColor: '#303030',
        color: 'white',
    },
    ul : {
        listStyleType: 'disc',
    }
});

class Aptitudes extends Component {

    render() {
        const { classes, t } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.expansion}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                            <Avatar className={classes.small, classes.icon}> <MenuBookIcon />  </Avatar>
                            <Typography className={classes.heading}>{t('Studies')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                            <List>
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Studies1')}</Typography>
                                </ListItem>
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Studies2')}</Typography>
                                </ListItem>                              
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header" >
                            <Avatar className={classes.small, classes.icon}> <WorkIcon />  </Avatar>
                            <Typography className={classes.heading}>{t('Jobs')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Work1')}</Typography>
                                </ListItem>                           
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header" >
                            <Avatar className={classes.small, classes.icon}> <PublicIcon />  </Avatar>
                            <Typography className={classes.heading}>{t('Languages')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Language1')}</Typography>
                                </ListItem>   
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Language2')}</Typography>
                                </ListItem>  
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Language3')}</Typography>
                                </ListItem>                          
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header" >
                            <Avatar className={classes.small, classes.icon}> <KeyboardIcon />  </Avatar>
                            <Typography className={classes.heading}>{t('ProgrammLanguages')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Programm1')}</Typography>
                                </ListItem>   
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Programm2')}</Typography>
                                </ListItem>  
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Programm3')}</Typography>
                                </ListItem>    
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Programm4')}</Typography>
                                </ListItem>                          
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel6-content" id="panel6-header" >
                            <Avatar className={classes.small, classes.icon}> <DesktopWindowsIcon />  </Avatar>
                            <Typography className={classes.heading}>{t('Tools')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List>
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Tool1')}</Typography>
                                </ListItem>   
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Tool2')}</Typography>
                                </ListItem>  
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Tool3')}</Typography>
                                </ListItem>                           
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)((withTranslation('Vocabulary'))(Aptitudes));