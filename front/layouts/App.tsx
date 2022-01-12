import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import LogIn from "@pages/LogIn"
import SignUp from "@pages/SignUp"

const App = () => {
  return <Switch>
    <Redirect exact path="/" to ="/login" />
    {/*주소가 /면 /login 으로 */}
    <Route path ="/login" component={LogIn}/>
    <Route path ="/signup" component={SignUp}/>
  </Switch>;
};

export default App;
