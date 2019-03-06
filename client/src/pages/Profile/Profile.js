import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Gravatar from 'react-gravatar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ItemsGrid from '../../components/ItemsGrid';

const Profile = ({ classes, profile }) => {
  return (
    <div className={classes.container}>
      <Grid container spacing={24} className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container className={classes.name} alignItems="center">
              <Avatar className={classes.avatar}>
                <Gravatar email={profile.email} className={classes.gravatar} />
              </Avatar>
              <Typography component="h1" className={classes.fullname}>{profile.fullname}</Typography>
            </Grid>
            <Typography component="h2" className={classes.number}>
              <span className={classes.bold}>{profile.items.length}</span> Items shared <span className={classes.bold}>0</span> Items borrowed
            </Typography>
            <Typography className={classes.bio}>{profile.bio}</Typography>
          </Paper>
        </Grid>
      </Grid>
      {profile.items.length ? (
        <Grid item xs={12}>
          <Typography component="h2" className={classes.shared} color="primary">
            Shared Items
          </Typography>
          <ItemsGrid items={profile.items} />
        </Grid>
      ) : (
        ''
      )}
    </div>
  );
};

Profile.propTypes = {
  classes: PropTypes.object,
  profile: PropTypes.object
};

export default withStyles(styles)(Profile);
