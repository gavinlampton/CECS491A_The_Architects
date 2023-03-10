import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import LoginPage from "./Components/Login/LoginPage";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          
          <Redirect to="/" />
          {/*if anything else is enter it will direct to loginpage(home route) */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
