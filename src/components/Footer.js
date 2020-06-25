import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';

class Footer extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div style={{width:"100%"}}>
                <Avatar> <EmailIcon/> </Avatar>
                <Avatar></Avatar>
                <Avatar></Avatar>
                <Avatar></Avatar>
            </div>
        );
    }
}

export default withStyles(styles)((withTranslation('Vocabulary'))(Aptitudes));