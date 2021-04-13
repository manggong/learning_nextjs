import React from 'react';
import TodoListItem from './TodoListItem';
import style from '../styles/TodoList.module.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className={style.TodoList}>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
