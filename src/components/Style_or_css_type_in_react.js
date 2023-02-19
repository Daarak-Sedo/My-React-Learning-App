import React from "react"
import "./Style_or_css_type_in_react.css"

function Style_or_css_type_in_react() {
    return (
        <div>
            <h1 className="heading"> Style type 1 - External Style/css -by ClassName </h1>
            <h2 style={{color:"green"}}>style type 2 - Internal style/css - by Style (Use - Camel Case In React , Do Not Use: - (hypan) between Css letter)</h2>
        </div>

    )
}

export default Style_or_css_type_in_react