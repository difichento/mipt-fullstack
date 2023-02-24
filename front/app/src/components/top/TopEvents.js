import React from "react";
import "./TopEvents.css"
import { LiveToQueryAndAnimate } from "../utils/Actions";

function sport(name, enabled=false) {

    function QuerySportType() {
        var btn = document.querySelector("." + name)
        if (btn.classList.contains('enabled-sport')) {
            return
        }
        var prev_btn = document.querySelector(".enabled-sport")
    
        /* animation */
        btn.classList.add("enabled-sport")
        prev_btn.classList.remove("enabled-sport")
        /* get matches from db */
        console.log('query sport' + name)
    }

    return (
        <button className="sport" onClick={QuerySportType}>
            <span className={"sport-icon " + name + (enabled ? " enabled-sport" : "")}></span>
        </button>
    )
}

export function TopEvents() {
    return (
        <main className="main-container">
            <div className="container">
                <div className="title-top">Топ события</div> {"-".repeat(110)}
            </div>
            <div className="container">
                <div className="selector">
                    <div className="is-live">
                        <div className="live-title">Live</div>
                        <button className="live-button" onClick={LiveToQueryAndAnimate}>
                            <div className="live-button-circle"></div>
                        </button>
                    </div>
                    <div className="separator"></div>
                    <div className="sportlist">
                        {sport("football", true)}
                        {sport("cybersport", false)}
                    </div>
                </div>
            </div>
        </main>
    )
}

export function SetTopEventsJS() {
    var btn = document.querySelector(".live-button");
    btn.onclick = LiveToQueryAndAnimate;
}

