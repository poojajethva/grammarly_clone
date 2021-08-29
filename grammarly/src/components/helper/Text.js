import React from 'react';
import "./Text.scss";

const Text = (props) => {
    return(
        <div className={"text " + props.classList}>
            {props.children}
        </div>
    )
}

export default Text;