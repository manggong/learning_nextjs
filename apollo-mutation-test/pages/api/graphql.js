import { ApolloServer } from 'apollo-server-micro';
// import typeDefs from './schema';
// import resolvers from './resolvers';
import DummyAPI from './datasources/dummy';

const apolloServer = new ApolloServer({
  // typeDefs,
  // resolvers,
  dataSources: () => ({
    dummyAPI: new DummyAPI(),
  }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
