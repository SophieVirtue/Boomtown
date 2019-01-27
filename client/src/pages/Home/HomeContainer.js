import React, { Component } from 'react';
import Home from './Home';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import gql from "graphql-tag";
// import { Query } from "react-apollo";

class HomeContainer extends Component {
  render() {
  //   return (
  //   <Query query={GET_TAGS}>
  //   {({ loading, error, data }) => {
  //     if (loading) return <p>Loading...</p>;
  //     if (error) return `<p>Error: {error}</p>`;

  //     {console.log('data', data);}
  //    return <div></div>
  //     // return (
  //     //   <select name="tag" onChange={onTagsSelected}>
  //     //     {data.tags.map(tag => (
  //     //       <option key={tag.id} value={tag.title}>
  //     //         {tag.title}
  //     //       </option>
  //     //     ))}
  //     //   </select>
  //     // );
  //   }}
  // </Query>
  //   );
    return <Home classes={this.props.classes} />;
  }
}
export default withStyles(styles)(HomeContainer);