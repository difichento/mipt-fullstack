import React from "react"
import "./Header.css"
import logo from "../img/logo.png"
import Button from "../utils/Button"
import {loginRedirectAction, regRedirectAction} from "../utils/Actions"

function NavigationBox(item, link) {
    return (
        <a className="nav-box" href={link}>{item}</a>
    )
}

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <div className="header-navigation">
                        {NavigationBox(<img src={logo} alt="logo"/>, "/")}
                        {NavigationBox("СПОРТ", "/")}
                        {NavigationBox("LIVE", "/")}
                        {NavigationBox("КИБЕРСПОРТ", "/")}
                    </div>
                    <div className="header-login">
                        {Button("login-btn", "Войти", loginRedirectAction)}
                        {Button("reg-btn", "Регистрация", regRedirectAction)}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header