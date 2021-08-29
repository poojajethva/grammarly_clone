import React from 'react';
import "./Section.scss";

const Section = (props) => {
    return(
        <section className={props.classList}>
            {props.children}
        </section>
    )
}

export default Section;