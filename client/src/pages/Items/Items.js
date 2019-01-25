import React, { Fragment } from 'react';
import ItemsGrid from '../../components/ItemsGrid/ItemsGrid'

const Items = ({ classes, items }) => {
  return <ItemsGrid className={classes.ItemsPage} items={items} />;
};

export default Items;

