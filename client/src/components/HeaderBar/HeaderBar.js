import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddCircle';
import ProfileIcon from '@material-ui/icons/Fingerprint';
import LogoutIcon from '@material-ui/icons/PowerSettingsNew';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styles from './styles';
import logo from '../../images/boomtown.svg';
import { withRouter, Link }from 'react-router-dom';


class HeaderBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <Button color="inherit" ><img src={logo} width="40" alt="Logo" /></Button>
          <div className={classes.grow} />
            <Button variant="contained" color="primary" className={classes.shareButton} >
            <AddIcon className={classes.addIcon} /> 
            Share Something
            </Button>
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}
                  component={Link}
                  to="/profile"
                  >
                  <ProfileIcon />Your Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}
                  component={Link}
                  to="/welcome"
                  ><LogoutIcon /> Sign Out</MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(HeaderBar));