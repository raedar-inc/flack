'use strict';
import React, { Component } from 'react';
import { Route , Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

import SignUp  from "./SignUp";
import SignIn from "./SignIn";
import {Dashboard} from "./Dashboard";
import err404 from "./404";
class App extends Component{
    render(){

        return(
            <div>
                <BrowserRouter>{/* here am making the routes */}
                    <Switch>
                        <Route exact path='/' component={SignIn}/>
                        <Route exact path='/SignUp' component={SignUp}/>
                        <Route exact path='/Dashboard' component={Dashboard}/>
                        <Route  component={err404}/>{/*making a route in case one makes an invalid route*/}
                    </Switch>
                </BrowserRouter>

            </div>
        )
    }
}
export default App;
