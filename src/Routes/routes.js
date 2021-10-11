import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import FrontPage from '../Pages/FrontPage';

const Routes = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route component = {FrontPage} path = '/main'/>

                <Route component={() => { return <h1>Not Found</h1> }} path="*" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;