import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { Link, withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import { ViewerContext } from '../../context/ViewerProvider';

const ItemCard = ({ classes, item }) => {
  return (
    <ViewerContext.Consumer>
      {({ viewer }) => (
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
              <Grid container className={classes.itemowner} alignItems="center">
                <Avatar className={classes.avatar}>
                  {viewer ? (
                    <Gravatar
                      email={viewer.email}
                      className={classes.gravatar}
                    />
                  ) : (
                    <Gravatar
                      email={item.itemowner.email}
                      className={classes.gravatar}
                    />
                  )}
                </Avatar>
                <Grid item>
                  <Typography component="p">
                    {viewer
                      ? viewer.fullname
                      : item.itemowner.fullname}
                  </Typography>
                  <Typography component="p" className={classes.moment}>
                    {moment(item.created).fromNow()}
                  </Typography>
                </Grid>
              </Grid>
              <Typography gutterBottom component="h2" className={classes.title}>
                {item.title}
              </Typography>
              <Typography component="p" className={classes.tags}>
                {item.tags && item.tags.map(tag => tag.title).join(', ')}
              </Typography>
              <Typography component="p" className={classes.description}>
                {item.description}
              </Typography>
            </CardContent>
          </Fragment>
          <CardActions>
            <Button variant="outlined" className={classes.button}>
              Borrow
            </Button>
          </CardActions>
        </Card>
      )}
    </ViewerContext.Consumer>
  );
};

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ItemCard));
