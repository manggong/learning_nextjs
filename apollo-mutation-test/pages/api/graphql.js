import { ApolloServer } from 'apollo-server-micro';
// import typeDefs from './schema';
// import resolvers from './resolvers';

// import TodoAPI from './datasources/todo';

const apolloServer = new ApolloServer({
  // typeDefs,
  // resolvers,
  dataSources: () => ({
    // todoAPI: new TodoAPI(),
  }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
