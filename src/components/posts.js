import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DisplayCharacter from './characterCard';
import "./styles.modules.css";

function Post() {
    const [id, setId] = useState(1);
    const [state, setState] = useState({
        charId: id,
        name: "",
        img: "",
        actor: ""
    });

    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters/${state.charId}`)
            .then(res => (setState({...state, name: res.data[0].name, img: res.data[0].img, actor: res.data[0].portrayed})))
            .catch(error => (console.log(error), alert("Please enter a number between 1 and 57")));
        //console.log(state.name, state.img, state.actor);
    }, [state.charId]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setState({
            ...state,
            charId: id,
        })
    }

    const handleChange = (event) => {
        setId(event.target.value);
    }

    return (
        <>
            <form onSubmit = {handleSubmit} className = "input_form">
                <label htmlFor = "id"><input type = 'text' onChange = {handleChange} value = {id}/></label> 
                <label htmlFor = "submit"><button>Submit</button></label>
            </form>
            <div className = "container">
                <DisplayCharacter name = {state.name} img = {state.img} actor = {state.actor} />
            </div>
        </>
    )
}

export default Post;