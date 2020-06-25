import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    typography: {
        fontFamily: 'Raleway',
    },
    heading: {
        fontSize: 14,
    },
    expansion : {
        marginLeft:60,
        marginRight:60,
    },
    expansionSummary : {
        backgroundColor:'#dbe7e7',
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
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                            <Typography className={classes.heading}>{t('Studies')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails >
                            <Typography>
                                
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                            <Typography className={classes.heading}>{t('Jobs')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                               
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                            <Typography className={classes.heading}>{t('Jobs')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                            <Typography className={classes.heading}>{t('Languages')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>

                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                            <Typography className={classes.heading}>{t('ProgrammLanguages')}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                            
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary className={classes.expansionSummary} 
                            expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
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