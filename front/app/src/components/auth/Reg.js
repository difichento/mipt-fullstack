import React from "react";
import { sendReg } from "../utils/Actions";
import "./Reg.css"
import { useState } from "react";

function RegForm () {
    const [email, setEmail] = useState("")
    const emailChange = (event) => { setEmail(event.target.value); };

    const [password, setPassword] = useState("")
    const passwordChange = (event) => { setPassword(event.target.value); };

    const [name, setName] = useState("")
    const nameChange = (event) => { setName(event.target.value); };

    return (
        <main className="auth-container">
            <h1>Регистрация</h1>
            <form className="reg-form">
                <input type="email" placeholder="Почта" name="email" onChange={emailChange}></input>
                <input type="password" placeholder="Пароль" name="password" onChange={passwordChange}></input>
                <input type="text" placeholder="Имя" name="name" onChange={nameChange}></input>
                <input type="button" id="sendReg" onClick={() => sendReg(email, password, name)} value="Зарегестрироваться"></input>
            </form>
        </main>
    )
}

export default RegForm