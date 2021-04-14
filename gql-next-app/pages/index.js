import React, { useState, useRef, useCallback } from 'react';
import client from '../apollo/client';
import { useQuery } from '@apollo/client';
import TodoTemplate from '../components/TodoTemplate';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { GET_ALL_TODOS } from '../apollo/queries/getAllTodos';

// export async function getServerSideProps() {

//   const { data } = await client.query({
//     GET_ALL_TODOS,
//   });
//   return {
//     props: {
//       data,
//     },
//   };
// }getInitialProps getServerSideProps

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_TODOS,
  });
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export function App({ data }) {
  // const { data, loading, error } = useQuery(GET_ALL_TODOS);

  const [todos, setTodos] = useState(data.todos);

  const nextId = useRef(201);

  const onInsert = useCallback(
    (title) => {
      const todo = {
        id: nextId,
        title,
        completed: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      );
    },
    [todos],
  );

  // if (loading) {
  //   console.log(data.todos);
  //   return <h2>Loading...</h2>;
  // }

  // if (error) {
  //   console.error(error);
  //   return null;
  // }

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
