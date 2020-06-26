import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
//Material-ui
import { withStyles } from '@material-ui/core';
import { Typography, Avatar } from '@material-ui/core';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
//Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WorkIcon from '@material-ui/icons/Work';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PublicIcon from '@material-ui/icons/Public';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

const styles = theme => ({
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
    }
});

class Aptitudes extends Component {

    render() {
        const { classes, t } = this.props;

        return (
            <div style={{width:"100%"}}>
                <div className={classes.expansion}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                            <Avatar className={classes.small, classes.icon}> <MenuBookIcon />  </Avatar>
                            <Typography className={classes.heading}>{t('Studies')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                            <Typography>
                                
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header" >
                            <Avatar className={classes.small, classes.icon}> <WorkIcon />  </Avatar>
                            <Typography className={classes.heading}>{t('Jobs')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                               
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header" >
                            <Avatar className={classes.small, classes.icon}> <PublicIcon />  </Avatar>
                            <Typography className={classes.heading}>{t('Languages')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>

                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header" >
                            <Avatar className={classes.small, classes.icon}> <KeyboardIcon />  </Avatar>
                            <Typography className={classes.heading}>{t('ProgrammLanguages')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                            
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel6-content" id="panel6-header" >
                            <Avatar className={classes.small, classes.icon}> <DesktopWindowsIcon />  </Avatar>
                            <Typography className={classes.heading}>{t('Tools')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                            
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)((withTranslation('Vocabulary'))(Aptitudes));