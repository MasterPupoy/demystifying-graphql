import fastify from "fastify";
import { getGraphQLParameters, processRequest } from "graphql-helix";

import { makeExecutableSchema } from "@graphql-tools/schema";

// import { typeDefs } from "./graphql/typeDefs.js";

const typeDefs = `
  type User {
    id: ID!
    name: String!
  }

  type Query {
    hello: String
    me: User
    getUser: User
  }
`;

const resolvers = {
  Query: {
    hello: (parent) => {
      // do some computational magic here
      return "the computational magic result";
    },
    getUser: (parent) => {
      return { id: "89898", name: "hulk", what: "asdklfj" };
    },
    me: (parent) => {
      return { id: "123" };
    },
  },
  User: {
    name: (parent) => {
      if (parent.name) {
        return parent.name;
      }

      // do database query here.
      return "hindi si john";
    },
  },
};

const app = fastify();

app.route({
  method: "POST",
  url: "/graphql",
  handler: async (req, res) => {
    const request = {
      body: req.body,
      headers: req.headers,
      method: req.method,
      query: req.query,
    };

    const { operationName, query, variables } = getGraphQLParameters(request);

    const result = await processRequest({
      operationName,
      query,
      variables,
      request,
      schema: makeExecutableSchema({ typeDefs, resolvers }),
    });

    if (result.type === "RESPONSE") {
      res.status(result.status);
      res.send(result.payload);
    }
  },
});

app.route({
  method: "GET",
  url: "/",
  handler: (req, res) => {
    res.send("hello world");
  },
});

app.route({
  method: "GET",
  url: "/prisoners",
  handler: (req, res) => {
    res.send(["prisoner1", "seldaboy"]);
  },
});

app.route({
  method: "POST",
  url: "/",
  handler: (req, res) => {
    res.send("hello world, post eto");
  },
});

app.listen(3003, () => {
  console.log(`GQL Running...`);
});
