import { User } from "../services/user.service.js";

export const resolvers = {
  Query: {
    hello: (parent, args) => {
      // do some computational magic here
      return `bonjour ${args.name || "World"}`;
    },
    getUser: (parent, args, context) => {
      const user = context.users.find((u) => u.id === args.id);
      return user;
    },
    me: (parent) => {
      return { id: "123" };
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = {
        id: Math.random().toString(),
        name: args.input.name,
        email: args.input.email,
      };
      users.push(user);
      return user;
    },
  },
  User,
};
