import React, { useState } from "react";
//import "./App.css";
//import Header from "./component/Header/Header";
import LoginForm from "./component/LoginForm/LoginForm";
import RegistrationForm from "./component/RegistrationForm/RegistrationForm";
import Navigation from "./component/navigation";
import idStorage from "./component/idStorage";
import dataStorage from "./component/dataStorage";

//import Home from "./component/Home/Home";
//import PrivateRoute from "./utils/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AlertComponent from "./component/AlertComponent/AlertComponent";
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
      <div className="App">
        <div className="container d-flex align-items-center flex-column">
          <Navigation />
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm
                showError={updateErrorMessage}
                updateTitle={updateTitle}
              />
            </Route>
            <Route path="/register">
              <RegistrationForm
                showError={updateErrorMessage}
                updateTitle={updateTitle}
              />
            </Route>
            <Route path="/login">
              <LoginForm
                showError={updateErrorMessage}
                updateTitle={updateTitle}
              />
            </Route>
            <Route path="/idStorage" component={idStorage} />
            <Route path="/dataStorage" component={dataStorage} />
          </Switch>
          <AlertComponent
            errorMessage={errorMessage}
            hideError={updateErrorMessage}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
