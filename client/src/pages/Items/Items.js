import React, { Fragment } from 'react';
import ItemsGrid from '../../components/ItemsGrid/ItemsGrid';
import PropTypes from 'prop-types';

const Items = ({ classes, items }) => {
  return (
    <Fragment>
      <ItemsGrid className={classes.ItemsPage} items={items} />
    </Fragment>
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

export default Items;
