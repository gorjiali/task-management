import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Edit = lazy(() => import("./components/Edit"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/edit/:taskId">
            <Edit />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
