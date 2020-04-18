/*eslint-disable*/
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {ROUTE} from "./route-config";
import Main from "../screens/Main/Main";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import {Provider} from "react-redux";
import configureStore from "../store/configureStore";
import Authorization from '../screens/Authorization/Authorization';

function App() {
  const store = configureStore();

  return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={ROUTE.HOME}>
              <Main/>
            </Route>
            <Route exact path={ROUTE.LOGIN}>
              <Login/>
            </Route>
            <Route path={ROUTE.REGISTER}>
              <Register/>
            </Route>
            <Route path={ROUTE.AUTHORIZATION}>
              <Authorization/>
            </Route>
            <Route>
              <Login/>
            </Route>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
