import React, { Component, Fragment } from 'react';
import ItemCard from '../ItemCard/ItemCard'



class ShareItemPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

  render() {
    return (

      <Fragment>
          <ItemCard />
      </Fragment>
    );
  }
}

export default ShareItemPreview;