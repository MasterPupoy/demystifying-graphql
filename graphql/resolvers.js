import { User } from "../services/user.service.js";

export const resolvers = {
  Query: {
    samuraiList: (parent, args, context) => {
      return context.db.samurai.findMany({
        skip: args.pageParams.offset,
        take: args.pageParams.limit,
      });
    },
    longSamuraiList: async (parent, args, context) => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
      return context.db.samurai.findMany({
        skip: args.pageParams.offset,
        take: args.pageParams.limit,
      });
    },
    nepliksList: async (parent, args, context) => {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 3000)
      );
      return context.db.nepliks.findMany({});
    },
    hello: (parent, args) => {
      // do some computational magic here
      return `bonjour ${args.name || "World"}`;
    },
    getUser: (parent, args, context) => {
      const user = context.users.find((u) => u.id === args.id);
      return user;
    },
    me: (parent, args, context) => {
      console.log("context ni me", context);
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
    createSamurai: (parent, args, context) => {
      return context.db.samurai.create({ data: args.input });
    },
  },
  User,
};
