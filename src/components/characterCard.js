import React from 'react';
import "./styles.modules.css";

function DisplayCharacter(props) {
    return (
        <div className = "item">
            <img src = {props.img} alt = {props.name}/>
            <h3>{props.name}</h3>
            <span>{props.actor}</span>
        </div>
    )
}

export default DisplayCharacter;