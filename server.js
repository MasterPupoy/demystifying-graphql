import fastify from "fastify";
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
} from "graphql-helix";

import { makeExecutableSchema } from "@graphql-tools/schema";

import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

import { users } from "./data/users.js";

const app = fastify();

app.route({
  method: "GET",
  url: "/graphql",
  handler: (req, res) => {
    res.header("content-type", "text/html").send(renderGraphiQL());
  },
});

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
      contextFactory: () => ({
        users,
      }),
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
