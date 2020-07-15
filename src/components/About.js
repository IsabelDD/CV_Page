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
    marginLeft:50,
    marginTop:50,
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
    marginTop: 100,
    marginBottom: 100,
    height: '14%',
    textAlign: 'right',
    paddingLeft: 80,
    paddingRight: 80,
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