import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import style from '../styles/TodoListItem.module.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, title, completed } = todo;

  return (
    <div className={style.TodoListItem}>
      <div
        className={cn(`${style.checkbox}`, { completed })}
        onClick={() => onToggle(id)}
      >
        {completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className={style.text}>{title}</div>
      </div>
      <div className={style.remove} onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
