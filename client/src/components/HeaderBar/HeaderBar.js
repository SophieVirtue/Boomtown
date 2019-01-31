import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Logo from '../../images/boomtown.svg';
import AddIcon from '@material-ui/icons/AddCircle';
import styles from './styles';

const HeaderBar = ({classes}) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" ><img src={Logo} width="40"/></Button>
          <div className={classes.grow} />
          <Button variant="contained" color="primary" className={classes.button} >
            <AddIcon className={classes.addIcon} /> 
            Share Something
            </Button>
          <Button color="inherit">3.</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderBar);