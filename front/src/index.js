import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Search from './Search/Search'
import Apartment from './Apartment/Apartment'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/casa">
                <Apartment />
            </Route>
            <Route path="/">
                <Search />
            </Route>
        </Switch>
    </Router>,
    document.getElementById('root')
)