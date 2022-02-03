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

  input PaginationParams {
    limit: Int!
    offset: Int!
  }

  type Query {
    hello(name: String): String
    me: User
    getUser(id: ID!): User
    samuraiList(
      pageParams: PaginationParams = { limit: 5, offset: 0 }
    ): [Samurai!]!
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
