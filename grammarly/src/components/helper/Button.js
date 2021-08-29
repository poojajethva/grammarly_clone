import React from 'react';
import "./Button.scss";

const Button = (props) => {
    return(
        <a href={props.link} className={"button " + props.classList}>
            {props.children}
        </a>
    )
}

export default Button;