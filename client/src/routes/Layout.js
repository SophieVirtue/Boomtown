import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Items from '../pages/Items';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Share from '../pages/Share';
import HeaderBar from '../components/HeaderBar';
import {ViewerContext} from '../context/ViewerProvider';
import FullScreenLoader from '../components/FullScreenLoader';

export default () => (
  <Fragment>
    <HeaderBar />
    <ViewerContext.Consumer>
      {({ viewer, loading }) => {
        if (loading) {
          return <FullScreenLoader />;
        }
        if (viewer) {
          return (
          <Switch>
          <Route exact path="/items" component={Items} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:userid" component={Profile} />
          <Route exact path="/share" component={Share} />
          <Redirect from="*" to="/items" />
        </Switch>);
        } else {
          return (
          <Switch>
          <Route exact path="/welcome" component={Home} />
          <Redirect from="*" to="/welcome" />
          </Switch>);
        }
      }}
    </ViewerContext.Consumer>
  </Fragment>
);
