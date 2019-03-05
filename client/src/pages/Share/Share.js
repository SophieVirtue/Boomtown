import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const Share = ({ classes, tags }) => {
  return (
    <Grid container className={classes.container} spacing={40} justify="center">
      <Grid item sm={6} md={4}>
        <Hidden only="xs">
          <ShareItemPreview />
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ShareItemForm tags={tags} classes={classes} />
      </Grid>
    </Grid>
  );
};

Share.propTypes = {
  classes: PropTypes.object,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Share;
