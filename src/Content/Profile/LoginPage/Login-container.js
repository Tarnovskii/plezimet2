import {MLogin} from "./Login-component-mobile";
import {PLogin} from "./Login-component-pc";
import React from "react";

export const LoginContainer = (props) => {
    if (props.device === "full")
        return <PLogin rerender={props.rerender}/>;
    else return <MLogin text={"No version for mobile"}/>
};