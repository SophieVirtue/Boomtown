import React from 'react';
import ShareItemForm from '../../components/ShareItemForm';
// import ShareItemPreview from '../../components/ShareItemPreview';

/* 
  TODO: Create ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 
  and upload an image.

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/

const Share = ({ classes, tags }) => {
  console.log(tags);
  return <ShareItemForm classes={classes} tags={tags} />;
};

export default Share;
