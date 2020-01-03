import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return 'Hello World!';
    }
  }
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
/**
 * GraphQL endpoint with apollo-server-micro doesn't work
 * https://github.com/zeit/next.js/issues/7777#issuecomment-509412222
 */
export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });