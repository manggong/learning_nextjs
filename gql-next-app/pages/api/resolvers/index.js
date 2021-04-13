const resolvers = {
  Query: {
    todos: (_, __, { dataSources }) => dataSources.todoAPI.getAllTodos(),
  },
};

export default resolvers;
