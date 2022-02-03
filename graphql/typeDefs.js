import { gql } from "graphql-tag";
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    hello(name: String): String
    me: User
    getUser(id: ID!): User
  }
`;
