import { gql } from "graphql-tag";
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    hello(name: String): String
    me: User
    getUser(id: ID!): User
    samuraiList: [Samurai!]!
  }

  type Samurai {
    id: ID!
    name: String!
  }

  input CreateSamuraiInput {
    name: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    createSamurai(input: CreateSamuraiInput!): Samurai
  }
`;
