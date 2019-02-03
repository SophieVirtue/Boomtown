import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './style';
import {Link, withRouter} from 'react-router-dom';

const ItemCard = ({classes, item}) => {
  return (
    <Card className={classes.card}>
      <Fragment>
        <CardMedia
          className={classes.media}
          image={item.imageurl}

          component={Link}
          to={`/profile/${item.itemowner.id}`}
          title="Image"
        />
        <CardContent>
          <Typography gutterBottom component="h2">
            {item.title}
          </Typography>
          <Typography component="p">
            {item.description}
            </Typography>
            <Typography component="p">
            {item.tags.map(tag => tag.title).join(', ')}
            </Typography>
          
        </CardContent>
      </Fragment>
      <CardActions>
        <Button size="small" color="primary">
          Borrow
        </Button>
      </CardActions>
    </Card>
  );
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ItemCard));