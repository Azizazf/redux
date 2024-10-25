// ListTask.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './task';
import { filterTasks } from '../redux/action';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'DONE') return task.isDone;
    if (filter === 'NOT_DONE') return !task.isDone;
    return true;
  });

  return (
    <div className='list-task'>
      <div>
        <button onClick={() => dispatch(filterTasks('ALL'))}>All</button>
        <button onClick={() => dispatch(filterTasks('DONE'))}>Done</button>
        <button onClick={() => dispatch(filterTasks('NOT_DONE'))}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
