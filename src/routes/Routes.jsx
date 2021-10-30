import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Login from "../pages/login"

const Routes = () => {
    return <>
     <Router>

        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
  
    </Router></>
}

export default Routes 