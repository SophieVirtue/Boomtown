import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Slide from '@material-ui/core/Slide';
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
import { withRouter, Link } from 'react-router-dom';
import { LOGOUT_MUTATION, VIEWER_QUERY} from '../../apollo/queries';
import {graphql, compose} from 'react-apollo';
import PropTypes from 'prop-types';

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
    const { classes, location } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);


    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <Button color="inherit" href="/items"><img src={logo} width="40" alt="Logo" /></Button>
          <div className={classes.grow} />
          <Slide
           direction="left"
            in={location.pathname !== '/share'}
            mountOnEnter
            unmountOnExit
          >
            <Button variant="contained" color="primary" href="/share">
            <AddIcon className={classes.addIcon} /> 
            Share Something
            </Button>
            </Slide>
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
                  to={`/profile/${this.props.user.id}`}
                  >
                  <ProfileIcon />Your Profile</MenuItem>
                  <MenuItem onClick={e => {
                    e.preventDefault();
                    this.props.logoutMutation({ });
                  }}
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
  logoutMutation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

const refetchQueries = [
  {
    query: VIEWER_QUERY,
  },
];

export default compose(
  graphql(LOGOUT_MUTATION, {
    options: {
      refetchQueries,
    },
    name: 'logoutMutation',
  }),
  withStyles(styles), withRouter)(HeaderBar);
