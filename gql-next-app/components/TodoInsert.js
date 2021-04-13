import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import style from '../styles/TodoInsert.module.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className={style.TodoInsert} onSubmit={onSubmit}>
      <input placeholder='Insert To-do' value={value} onChange={onChange} />
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
