import React from 'react'
import style from './Login-pc.module.css'
import {NavLink} from "react-router-dom";
import {state} from "../../../store/store";

export const PLogin = (props) => {
    return (
        <div className={style.page}>
            <div className={style.mainBlock}>
                <div>
                    <p>Login</p>
                </div>
                <div>
                    <input/>
                </div>
                <div>
                    <p>Password</p>
                </div>
                <div>
                    <input/>
                </div>
                <br/>
                <div onClick={() => {state.logged = true; props.rerender()}}>
                    <NavLink className={style.login} to="/"> Enter </NavLink>
                </div>
            </div>
        </div>
    )
};
