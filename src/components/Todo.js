import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) return { ...item, completed: !item.completed };

        return item;
      })
    );
  };

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <li className='todo-item'>{text}</li>
      <div className='todo'>
        <button className='complete-btn' onClick={completeHandler}>
          {' '}
          <i className='fas fa-check'></i>
        </button>
        <button className='trash-btn' onClick={deleteHandler}>
          {' '}
          <i className='fas fa-trash'></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
