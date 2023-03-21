const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const app = express();

const MONGODB =
  "mongodb+srv://levy:1234567890@cluster0.2k1nmyf.mongodb.net/dlta_assignment";

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("MongoDb connected");
});

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });
}

startApolloServer();

app.listen({ port: 5000 }, () => {
  console.log(`Server ready at http://localhost:5000`);
});
