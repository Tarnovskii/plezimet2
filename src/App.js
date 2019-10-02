import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HeaderContainer} from './Header/Header-container'
import './App.css';


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/search">
                        <HeaderContainer device={props.device}/>
                        SEARCH
                    </Route>
                    <Route path="/profile">
                        <HeaderContainer device={props.device}/>
                        PROFILE
                    </Route>
                    <Route path="/content">
                        <HeaderContainer device={props.device}/>
                        CONTENT
                    </Route>
                    <Route path="/ln">
                        <HeaderContainer device={props.device}/>
                        LANGUAGE
                    </Route>
                    <Route path="/">
                        <HeaderContainer device={props.device}/>
                        MAIN PAGE
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
