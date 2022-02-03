export const User = {
  name: (parent) => {
    if (parent.name) {
      return parent.name;
    }

    // do database query here.
    return "hindi si john";
  },
};
