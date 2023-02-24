import React from "react"

function Button(cls, text, action) {
    return (
        <button className={cls} onClick={action}>{text}</button>
    )
}

export default Button