import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import {ExpansionPanelList} from './Auxiliar/AuxiliarPanel';
//Material-ui
import { withStyles } from '@material-ui/core';

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
                    {ExpansionPanelList(this.props, 'Studies', "1")}
                    {ExpansionPanelList(this.props, 'Jobs', "2")}
                    {ExpansionPanelList(this.props, 'Curses', "7")}
                    {ExpansionPanelList(this.props, 'Languages', "3")}
                    {ExpansionPanelList(this.props, 'Programms', "4")}  
                    {ExpansionPanelList(this.props, 'Tools', "5")}
                    {ExpansionPanelList(this.props, 'Skills', "6")}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)((withTranslation('Vocabulary'))(Aptitudes));