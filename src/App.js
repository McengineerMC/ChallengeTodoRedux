import React from 'react';

import './App.css';
import Formtask from './components/Formtask';
import Listtask from './components/Listtask';

function App() {


  return (
    <div className="App">
  <h1>Todo List</h1>    
 <Formtask/>
 <Listtask />
    </div>
  );
}

export default App;





