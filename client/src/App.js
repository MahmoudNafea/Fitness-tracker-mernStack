import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExerciseLists from './components/exercisesLists';
import EditExercise from './components/editExercise';
import CreateExercise from './components/createExercise';
import CreateUser from './components/createUser';


function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Route path="/" exact component={ExerciseLists} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
