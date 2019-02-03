import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../../components/ItemCard/ItemCard';

const Profile = ({ classes, profile }) => {
  return (
    <Fragment>
    <div>
      <h2>{profile.fullname}</h2>
      <p>{profile.items.length} Items shared</p>
      <p>0 Items borrowed</p>
      <p>{profile.bio}</p>
    </div>
    <Grid className={classes.grid} container spacing={24}>
    {profile.items.map(item => {
      return(
        <Grid item xs={12} sm={6} md={4} className={classes.gridItems} key={item.id}>
        <ItemCard item={item}/>
        </Grid>
      );
    })}
    </Grid>
    </Fragment>
  );
};

export default Profile;
