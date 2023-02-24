import React from "react";
import { regRedirectAction } from "../utils/Actions";
import Button from "../utils/Button";
import "./Banners.css";

function Banner(text, btn_text, btn_action) {
    return (
        <main className="banner">
            <div className="container">
                <div className="banner-content">
                    <div className="banner-text">
                        {text}
                    </div>
                    {Button("banner-btn", btn_text, btn_action)}
                </div>
            </div>
        </main>
    )
} 

export function Banners() {
    let banner1 = <div style={{display: 'inline', color: "white", whiteSpace: "pre-line"}}>
        Фрибет <div style={{display: 'inline', color: '#00C7B0'}}>1000₽</div> <br />
        новым игрокам</div>;
    return Banner(banner1, 'Регистрация', regRedirectAction)
}