import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';


const Share = ({ classes, tags }) => {
  return(
    <div>
      <div>
        <ShareItemPreview />
      </div>
      <div>
        <ShareItemForm classes={classes} tags={tags} />;
      </div>
    </div>
);
};


export default Share;
