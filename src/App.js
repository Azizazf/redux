// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTask from './components/addTask';
import ListTask from './components/listTask';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
