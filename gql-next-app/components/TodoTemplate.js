import React from 'react';
import style from '../styles/TodoTemplate.module.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className={style.TodoTemplate}>
      <div className={style.app_title}>일정 관리</div>
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default TodoTemplate;
