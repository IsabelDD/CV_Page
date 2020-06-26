import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { Typography, Avatar } from '@material-ui/core';
import avatar from '../static/images/avatar_isabel.jpg';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
      large: {
        width: theme.spacing(18),
        height: theme.spacing(18),
      },
      typography: {
        fontFamily: 'Raleway',
      },
      subtitle: {
        fontSize: 15,
      }
});

class About extends Component {
    render () {
        const { classes, t } = this.props;

        return (
            <div>
                <div style={{width:"100%"}}>
                    <Avatar style={{margin:50}} alt="Isabel Diaz" src={avatar} className={classes.large} />
                </div>
                <div style={{width:"100%", textAlign: 'center'}}>
                    <Typography variant="h4">{t('AboutMe')}</Typography>
                </div>
            </div>
        );
    } 
}

export default withStyles(styles)((withTranslation('Vocabulary'))(About));