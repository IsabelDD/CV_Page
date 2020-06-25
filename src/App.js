import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { Typography, } from '@material-ui/core';
import avatar from './static/images/avatar_isabel.jpg';
import Aptitudes from './components/Aptitudes';

const styles = theme => ({
  root: {
    display: 'grid',
    backgroundColor: '#f4f6ff',
    minHeight: '100vh',
    overflow: 'hidden',
  },
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

class App extends Component {
  
  render() {
    const { classes, t } = this.props;

    return (
      <div className={classes.root}>
        <div style={{width:"100%"}}>
          <Avatar style={{margin:50}} alt="Isabel Diaz" src={avatar} className={classes.large} />
        </div>
        <div style={{width:"100%", textAlign: 'center'}}>
          <Typography variant="h4">{t('AboutMe')}</Typography>
        </div>
        <Aptitudes/>
      </div>
    );
  }
}

export default withStyles(styles)((withTranslation('Vocabulary'))(App));