import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Browse, Home, SignIn, SignUp } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
    </BrowserRouter>
  );
}

export default App;
