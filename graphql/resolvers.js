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
