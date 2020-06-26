import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Aptitudes from './components/Aptitudes';
import About from './components/About';
import Footer from './components/Footer';

const styles = theme => ({
  root: {
    display: 'grid',
    backgroundColor: '#f4f6ff',
    minHeight: '100vh',
    overflow: 'hidden',
  },
});

class App extends Component {
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <About/>
        <Aptitudes/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(styles)(App);