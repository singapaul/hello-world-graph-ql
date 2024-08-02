import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// optional step of writing #graphql to bring in syntax highlighting
// representation of type definitions for API
const typeDefs = `#graphql

    schema {
      query: Query
    }

    type Query {
        greeting: String
    }
`;

const resolvers = {
  Query: {
    // resolver function
    // we could fetch data or search a database here
    greeting: () => "Hello World",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const info = await startStandaloneServer(server, { listen: { port: 9000 } });

console.log(`Server running at ${info.url}`);
