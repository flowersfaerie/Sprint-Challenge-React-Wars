import React from 'react';
import "./StarWars.css";

const CharacterCard = props => {
   console.log(props.character)
    
    return (
        <div className="character-list">
            <h2>Character Name: {props.character.name}</h2>
            <div className="bottom">
                <p>Height: {props.character.height}</p>
                <p>Weight: {props.character.mass}</p>
                <p>Year Born: {props.character.birth_year}</p>
                <p>Hair Color: {props.character.hair_color}</p>
                <p>Eye Color: {props.character.eye_color}</p>
            </div>
        </div>
    );
};

export default CharacterCard;