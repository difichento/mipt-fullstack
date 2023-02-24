import React from "react";
import { sendLogin } from "../utils/Actions";
import { useState } from "react";
import "./Login.css"

function LoginForm() {
    const [username, setUsername] = useState("")
    const usernameChange = (event) => { setUsername(event.target.value); };

    const [password, setPassword] = useState("")
    const passwordChange = (event) => { setPassword(event.target.value); };

    return (
        <main className="auth-container">
            <h1>Авторизация</h1>
            <form className="login-form">
                <input type="username" placeholder="Username" name="username" value={username} onChange={usernameChange}></input>
                <input type="password" placeholder="Пароль" name="password" onChange={passwordChange}></input>
                <input type="button" id="sendLog" onClick={() => sendLogin(username, password)} value="Войти"></input>
            </form>
        </main>
    )
}

export default LoginForm