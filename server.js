import fastify from "fastify";

const app = fastify();

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
