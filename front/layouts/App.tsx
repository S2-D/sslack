import React from 'react';
import loadable from "@loadable/component";
import {Switch, Route, Redirect} from "react-router-dom"

const LogIn = loadable(() => import("@pages/LogIn"));
const SignUp = loadable(() => import("@pages/SignUp"));

const App = () => {
  return <Switch>
    <Redirect exact path="/" to ="/login" />
    {/*주소가 /면 /login 으로 */}
    <Route path ="/login" component={LogIn}/>
    <Route path ="/signup" component={SignUp}/>
  </Switch>;
};

export default App;
