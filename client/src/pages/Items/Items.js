import React, { Fragment } from 'react';
import ItemsGrid from '../../components/ItemsGrid/ItemsGrid'
import HeaderBar from '../../components/HeaderBar';

const Items = ({ classes, items }) => {
  return (
    <Fragment>
      <HeaderBar />
      <ItemsGrid className={classes.ItemsPage} items={items} />
    </Fragment>
  )
};

export default Items;

