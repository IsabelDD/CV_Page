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
    width:"100%", 
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
  },
  body1: {
    textAlign: 'left',
    fontSize: 11,
    margin: '20px 60px 60px 60px',
    padding: 10,
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
                <div className={classes.typography}>
                    <Typography variant="h4">{t('AboutMe')}</Typography>
                    <div className={classes.body1}>
                      <Typography variant="body1">{t('AboutInformation1')}</Typography><br/>
                      <Typography variant="body1">{t('AboutInformation2')}</Typography><br/>
                      <Typography variant="body1">{t('AboutInformation3')}</Typography><br/>
                      <Typography variant="body1">{t('AboutInformation4')}</Typography><br/>
                  </div>
                </div>
            </div>
        );
    } 
}

export default withStyles(styles)((withTranslation('Vocabulary'))(About));