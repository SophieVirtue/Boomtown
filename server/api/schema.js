const { gql } = require('apollo-server-express');

/**
 *  @TODO: Boomtown Schema
 *
 *  Be sure to finish writing resolvers for all types and any relational fields, where required.
 *
 */
module.exports = gql`
  scalar Upload

  scalar Date

  type Item {
    id: ID!
    title: String!
    imageurl: String
    description: String!
    ownerid: User!
    tags: Tag
    created: Date!
    borrowerid: User
  }

  type User {
    id: ID!
    email: String!
    fullname: String!
    bio:  String
    items: Item
    borrowed: Item
  }

  type Tag {
    id: ID!
    title: String!
  }

  type File {
    id: ID!
    filename: String!
    mimetype: String!
    encoding: String!
    itemid: ID!
  }

  input AssignedTag {
    id: ID!
    title: String!
  }

  input AssignedBorrower {
    id: ID!
  }

  input NewItemInput {
    title: String!
    description: String
    tags: AssignedTag!
  }

  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  type Mutation {
    addItem(item: NewItemInput!, image: Upload): Item
  }
`;