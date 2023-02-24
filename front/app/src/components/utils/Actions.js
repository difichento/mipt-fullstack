import Settings from "../../settings"

export function homeRedirectAction() {
    window.location.href = "/"
}

export function loginRedirectAction() {
    window.location.href = "/login"
}

export function regRedirectAction() {
    window.location.href = "/reg"
}

export function playAction() {
    console.log("play")
}

export function LiveToQueryAndAnimate() {
    var btn = document.querySelector(".live-button")
    var btn_circle = document.querySelector(".live-button-circle")
    /* filter */
    var is_enabled = btn.classList.contains('live-button-enable')
    if (is_enabled) {
        console.log("remove filter live")
    } else {
        console.log("add filter live")
    }
    /* animation */
    btn.classList.toggle('live-button-enable')
    btn_circle.classList.toggle('live-button-circle-enable')
}



export function sendLogin(username, password) {
    fetch(Settings.backendURL + "/auth/login/",
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            },
            "body": JSON.stringify({
                "username": username,
                "password": password,
            })
        })
        .then(response => response.json())
        .then(response => {
            window.alert("Logged in: " + username + " + " + password + "\nResponse: " + JSON.stringify(response))
        })
        .catch((error) => {
            alert(error)
            console.log("ERROR: " + username + " " + password)
        })
}

export function sendReg(email, password, username) {
    fetch(Settings.backendURL + "/auth/reg/",
        {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
            },
            "body": JSON.stringify({
                "username": username,
                "password": password,
                "email": email
            })
        })
        .then(response => response.json())
        .then(response => {
            homeRedirectAction()
            window.alert("Registered: " + email + " + " + password + " + " + username
                + "\nResponse: " + JSON.stringify(response))
        })
        .catch((error) => {
            alert(error)
            console.log("ERROR: " + username + " " + password + " " + email)
        })
}