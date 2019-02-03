import React, { Fragment } from 'react';
import ItemsGrid from '../../components/ItemsGrid/ItemsGrid';

const Items = ({ classes, items }) => {
  return (
    <Fragment>
      <ItemsGrid className={classes.ItemsPage} items={items} />
    </Fragment>
  )
};

export default Items;

