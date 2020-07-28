import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import { Typography, Avatar, Divider } from '@material-ui/core';
import avatar from '../static/images/avatar_isabel.jpg';

const styles = theme => ({
  button: {
      margin: theme.spacing.unit,
  },
  large: {
    margin: "50px 0px 0px 50px",
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
  about: {
    width:"100%", 
    padding: 20,
  },
  subtitle: {
    fontSize: 15,
  },
  body1: {
    textAlign: 'left',
    fontSize: 11,
    margin: '20px 80px 0px 40px',
  },
  top : {
    width:'100%', 
    display: 'flex',
    justifyContent: 'space-between',
  },
  name: {
    width: '100%',
    margin: "100px 0 100px 0",
    height: '14%',
    textAlign: 'right',
    padding: "0 80px 0 80px",
    fontStyle: 'italic',
    fontWeight: 500,
  },
  titleAbout : {
    textAlign: 'left',
    marginLeft: 40,
  }
});

class About extends Component {
    render () {
        const { classes, t } = this.props;

        return (
            <div>
                <div className={classes.top}>
                    <Avatar className={classes.avatar} alt="IsabelDiaz" src={avatar} className={classes.large} />
                    <Typography variant="subtitle1" className={classes.name} >{t('Name')}</Typography>
                </div>
                <Divider />
                <div className={classes.about}>
                    <Typography className={classes.titleAbout} variant='h4'>{t('AboutMe')}</Typography>
                    <div className={classes.body1}>
                      <Typography variant="body1">{t('AboutInformation1')}</Typography><br/>
                      <Typography variant="body1">{t('AboutInformation2')}</Typography><br/>
                      <Typography variant="body1">{t('AboutInformation3')}</Typography><br/>
                      <Typography variant="body1">{t('AboutInformation4')}</Typography><br/>
                    </div>
                </div>
                <Divider />
            </div>
        );
    } 
}

export default withStyles(styles)((withTranslation('Vocabulary'))(About));