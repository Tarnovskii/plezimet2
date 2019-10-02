import {MHeader} from "./Header-component-mobile";
import {PHeader} from "./Header-component-pc";
import React from "react";

export const HeaderContainer = (props) => {
    if (props.device === "full")
        return <PHeader/>;
    else return <MHeader text={"No version for mobile"}/>
};