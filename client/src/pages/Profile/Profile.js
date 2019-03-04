import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../../components/ItemCard/ItemCard';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Gravatar from 'react-gravatar';

const Profile = ({ classes, profile, user }) => {
  return (
    <Fragment>
      <div>
        <Avatar aria-label="user" className={classes.avatar}>
          <Gravatar email={profile.email} />
        </Avatar>
        <h2>{profile.fullname}</h2>
        <p>{profile.items.length} Items shared</p>
        <p>0 Items borrowed</p>
        <p>{profile.bio}</p>
      </div>
      <Grid className={classes.grid} container spacing={24}>
        {profile.items.map(item => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              className={classes.gridItems}
              key={item.id}
            >
              <ItemCard item={item} />
            </Grid>
          );
        })}
      </Grid>
    </Fragment>
  );
};

Profile.propTypes = {
  classes: PropTypes.object,
  profile: PropTypes.object
};

export default Profile;
