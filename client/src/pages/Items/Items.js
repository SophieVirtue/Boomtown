import React from 'react';
import ItemsGrid from '../../components/ItemsGrid/ItemsGrid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Items = ({ classes, items }) => {
  return (
    <div className={classes.root}>
      <ItemsGrid items={items} />
    </div>
  );
};

Items.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default withStyles(styles)(Items);
