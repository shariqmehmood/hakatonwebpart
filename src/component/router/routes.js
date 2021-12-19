import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

 import Nabar from "../navbar/navbar";
import Home from "../../screen/frontpage";
import Signin from "../form/signin";
import Reqtab from "../requesttab/reqtab";
import AddManager from "../requesttab/Addmanager";


function ReactRouter() {
    return (
        <Router>
            <Nabar/>
            <Switch>
                <Route exact path='/'>
              <Home/>
                </Route>
                <Route exact path='/Signin'>
                 <Signin/>
                </Route>
                <Route exact path='/Reqtab'>
                 <Reqtab/>
                </Route>
                <Route exact path='/AddManager'>
                <AddManager/>
                </Route>
                
            </Switch>
        </Router>
    )
}

export default ReactRouter;