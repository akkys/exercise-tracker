import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import UsersList from "./components/UsersList";

function App() {
  return (
    <Router>
      <NavbarComponents />
      <div className="container">
        <Switch>
          <Route exact path="/" component={ExerciseList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
          <Route path="/userlist" component={UsersList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
