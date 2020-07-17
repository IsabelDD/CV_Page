import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import copy from "copy-to-clipboard";  
import { withStyles } from '@material-ui/core';
import { Avatar, Grid, Tooltip } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArtStationIcon from '../static/images/artStation_icon.jpg';
import TwitterIcon from '@material-ui/icons/Twitter';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 40,
        marginBottom: 23,
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    icon :{
        backgroundColor: '#303030',
        color: 'white',
        colorFill: 'pink',
        "&:hover": {
            cursor: "pointer",
        }
    },
    gridItem : {
        textAlign : "-webkit-center",
    },
    tooltip: {
        textSize: 14,
    }
});

class Footer extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleTooltip = this.handleTooltip.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.toCopy = this.toCopy.bind(this);
        this.state = {  
            textToCopy: "", 
            openTooltip: false,
            email: "isabel.diaz.dominguez@hotmail.com",
            artStationLink : "https://www.artstation.com/isabel_diaz",
            linkedinLink: "https://es.linkedin.com/in/isabel-diaz-dominguez",
            githubLink: "https://github.com/IsabelDD",
            twitterLink: "https://twitter.com/isabeldido",
        }; 
    }

    handleEmail() {
        this.setState({textToCopy: this.state.email});
        this.toCopy();
    }

    toCopy () {
        copy(this.state.textToCopy);  
        this.handleTooltip();
    }

    handleClick(link) {
        window.open(link);
    };


    handleTooltip = () => {
        this.setState({openTooltip: !this.state.openTooltip});
    };

    handleClose = () => {
        this.setState({openTooltip: false});
    };
    
   
    render() {
        const { classes,  t } = this.props;
          
        return (
            
            <div>
                <Grid container l={12} m={12} xs={12} direction="row" justify="center" alignItems="center"
                    className={classes.root} spacing={3}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={1} className={classes.gridItem}>
                        <Tooltip open={this.state.openTooltip} onClose={this.handleClose} className={classes.tooltip} title={t('EmailCopied')}>
                            <Avatar alt="Email" 
                                onClick = {this.handleEmail}                     
                                className={classes.small, classes.icon}> 
                                <EmailIcon/> 
                            </Avatar>
                        </Tooltip>
                    </Grid>
                    <Grid item xs={1} className={classes.gridItem}>
                        <Avatar alt="LinkedIn"
                        onClick={() => 
                            this.handleClick(this.state.linkedinLink)}
                        className={classes.small, classes.icon}> 
                        <LinkedInIcon/> 
                        </Avatar>
                    </Grid>
                    <Grid item xs={1} className={classes.gridItem}>
                        <Avatar alt="GitHub" 
                        onClick={() => 
                            this.handleClick(this.state.githubLink)}
                        className={classes.small, classes.icon}> 
                        <GitHubIcon/> 
                        </Avatar>
                    </Grid>
                    <Grid item xs={1} className={classes.gridItem}>
                        <Avatar alt="ArtStation"
                         onClick={() => 
                            this.handleClick(this.state.artStationLink)}
                        className={classes.small, classes.icon}
                        src={ArtStationIcon}>
                        </Avatar>   
                    </Grid>
                    <Grid item xs={1} className={classes.gridItem}>
                        <Avatar alt="Twitter" 
                        onClick={() => 
                            this.handleClick(this.state.twitterLink)}
                            className={classes.small, classes.icon}> 
                        <TwitterIcon/> 
                        </Avatar>
                    </Grid>
                    <Grid item xs={3}></Grid> 
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)((withTranslation('Vocabulary'))(Footer));