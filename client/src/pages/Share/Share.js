import React, { Fragment } from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const Share = ({ classes, tags }) => {
  return (
    <Fragment>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <ShareItemPreview />
        </Grid>
        <Grid item xs={6}>
          <ShareItemForm classes={classes} tags={tags} />
        </Grid>
      </Grid>
    </Fragment>
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
