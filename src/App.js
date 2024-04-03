import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
