import React from 'react'
import style from './header-pc.module.css'
import {NavLink} from "react-router-dom";

export const PHeader = () => {
    return (
        <header>
            <div className={style.main}>
                <NavLink className={style.link} to="/"> MainPage </NavLink>
            </div>
            <div className={style.search}>
                <input className={style.searchBar}/>
            </div>
            <div className={style.searchButton}>
                <NavLink className={style.link} to="/search"> Search </NavLink>
            </div>
            <div className={style.acc}>
                <NavLink className={style.link} to="/profile"> Profile </NavLink>
            </div>
            <div className={style.cnt}>
                <NavLink className={style.link} to="/content"> Content </NavLink>
            </div>
            <div className={style.lng}>
                <NavLink className={style.link} to="/ln"> Switch </NavLink>
            </div>
        </header>
    )
};
