import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String
    completed: Boolean!
  }

  type Query {
    todos: [Todo]!
  }
`;

export default typeDefs;
