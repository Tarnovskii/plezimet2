import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HeaderContainer} from './Header/Header-container'
import './App.css';


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderContainer device={props.device}/>
                <Switch>
                    <Route path="/search">
                        SEARCH
                    </Route>
                    <Route path="/profile">
                        PROFILE
                    </Route>
                    <Route path="/content">
                        CONTENT
                    </Route>
                    <Route path="/ln">
                        LANGUAGE
                    </Route>
                    <Route path="/">
                        MAIN PAGE
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
