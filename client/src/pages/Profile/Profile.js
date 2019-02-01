import React, { Fragment } from 'react';
import HeaderBar from '../../components/HeaderBar'

const Profile = ({ classes }) => {
  return (
    <Fragment>
    <HeaderBar />
    <div>
      <p>
        This is the profile page located at <code>/profile/:userid</code>.
      </p>
    </div>
    </Fragment>
  );
};

export default Profile;
