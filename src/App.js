import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {HeaderContainer} from './Header/Header-container'
import './App.css';
import {LoginContainer} from "./Content/Profile/LoginPage/Login-container";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    //-------Start switch------//
                    //-------Search bar------//
                    <Route path="/search">
                        <HeaderContainer device={props.device}/>
                        SEARCH
                    </Route>
                    //-------Profile page------//
                    <Route path="/profile">
                        <HeaderContainer device={props.device}/>
                        {props.isLogged ? <Redirect to="/profile"/> : <Redirect to={"/login"}/>}
                    </Route>
                    //-------Login page------//
                    <Route path="/login">
                        <LoginContainer device={props.device} users={props.users} logged={props.isLogged} rerender={props.rerender}/>
                    </Route>
                    //-------Content page------//
                    <Route path="/content">
                        <HeaderContainer device={props.device}/>
                        CONTENT
                    </Route>
                    //-------Language bar------//
                    <Route path="/ln">
                        <HeaderContainer device={props.device}/>
                        LANGUAGE
                    </Route>
                    //-------Home page------//
                    <Route path="/">
                        <HeaderContainer device={props.device}/>
                        MAIN PAGE
                    </Route>
                    //-------End switch------//
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
