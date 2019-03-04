import React, { Component } from 'react';
import Profile from './Profile';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_USER_ITEMS_QUERY } from '../../apollo/queries';
import PropTypes from 'prop-types';

class ProfileContainer extends Component {
  render() {
    const id =  (this.props.match.params.userid);
    return (
      <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: id }}>
        {({ loading, error, data }) => {
            if (loading) return <FullScreenLoader inverted />;
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Profile classes={this.props.classes} profile={data.user} />;
        }}
      </Query>
    );
  }
}

ProfileContainer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ProfileContainer);
