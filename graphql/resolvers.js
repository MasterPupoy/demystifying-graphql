import { User } from "../services/user.service.js";
const users = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Doe" },
  { id: "3", name: "Ash Ketchum" },
  { id: "4", name: "Natasha Romanoff" },
];

export const resolvers = {
  Query: {
    hello: (parent, args) => {
      // do some computational magic here
      return `bonjour ${args.name || "World"}`;
    },
    getUser: (parent, args) => {
      const user = users.find((u) => u.id === args.id);
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
