import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./index.css";

import LoginPage from "./Components/Login/LoginPage";
import CustomerForm from "./Components/Customer/CustomerForm";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <Router>
      <main>
        <Switch>
          
          <Route path="/customerform" exact>
            <CustomerForm />
          </Route>
          <Route path="/" exact>
            <LoginPage />
            <Footer />
          </Route>
          
          <Redirect to="/" />
          {/*if anything else is enter it will direct to loginpage(home route) */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
