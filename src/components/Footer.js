import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { Avatar, Grid  } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArtStationIcon from '../static/images/artStation_icon.jpg';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    icon :{
        backgroundColor: '#303030',
        color: 'white',
        colorFill: 'pink',
    }
});

class Footer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container xs={12} direction="row" justify="center" alignItems="center"
                    className={classes.root} spacing={2}>
                    <Grid item xs={5}></Grid>
                    <Grid item xs>
                        <Avatar alt="Email" className={classes.small, classes.icon}> <EmailIcon/> </Avatar>
                    </Grid>
                    <Grid item xs>
                        <Avatar alt="LinkedIn" className={classes.small, classes.icon}> <LinkedInIcon/> </Avatar>
                    </Grid>
                    <Grid item xs>
                        <Avatar alt="GitHub" className={classes.small, classes.icon}> <GitHubIcon/> </Avatar>
                    </Grid>
                    <Grid item xs>
                        <Avatar alt="ArtStation" className={classes.small, classes.icon} src={ArtStationIcon}> </Avatar>
                    </Grid>
                    <Grid item xs={5}></Grid> 
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)((withTranslation('Vocabulary'))(Footer));