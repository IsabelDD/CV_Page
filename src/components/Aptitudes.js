import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import {Heading} from './Auxiliar/HeadingExpansionPanel';
//Material-ui
import { withStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {ExpansionPanel, ExpansionPanelDetails } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';

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
        margin: "0px 60px 0px 60px",
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
});

class Aptitudes extends Component {

    render() {
        const { classes, t } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.expansion}>
                    <ExpansionPanel>
                    {Heading(this.props, 'Studies', "1")}
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
                        {Heading(this.props, 'Jobs', "2")}
                        <ExpansionPanelDetails>
                            <List>
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Work1')}</Typography>
                                </ListItem>                           
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        {Heading(this.props, 'Languages', "3")}
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
                        {Heading(this.props, 'ProgrammingLanguages', "4")}
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
                        {Heading(this.props, 'Tools', "5")}
                        <ExpansionPanelDetails>
                            <List>
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Tool2')}</Typography>
                                </ListItem>  
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Tool1')}</Typography>
                                </ListItem>   
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Tool4')}</Typography>
                                </ListItem>   
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Tool3')}</Typography>
                                </ListItem>                           
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        {Heading(this.props, 'Skills', "6")}
                        <ExpansionPanelDetails>
                            <List>
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Skill1')}</Typography>
                                </ListItem> 
                                <ListItem className={classes.ul}>
                                    <Typography>{t('Skill2')}</Typography>
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