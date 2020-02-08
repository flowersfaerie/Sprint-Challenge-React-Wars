import React from 'react';
import "./StarWars.css";

const CharacterCard = props => {
   console.log(props.character)
    
    return (
        <div className="character-list">
            Character Card
            <h2>Character Name: {props.character.name}</h2>
            <div className="bottom">
                <p>Height: {props.character.height}cm</p>
                <p>Weight: {props.character.mass}kg</p>
                <p>Year Born: {props.character.birth_year}</p>
            </div>
        </div>
    );
};

export default CharacterCard;