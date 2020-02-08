import React from 'react';
import { Card, CardHeader, CardBody, CardText, Col } from 'reactstrap';

// import "./StarWars.css";

const CharacterCard = props => {
   console.log(props.character)
    
    // return (
    //     <div className="character-list">
    //         <h2>Character Name: {props.character.name}</h2>
    //         <div className="bottom">
                // <p>Height: {props.character.height}</p>
                // <p>Weight: {props.character.mass}</p>
                // <p>Year Born: {props.character.birth_year}</p>
                // <p>Hair Color: {props.character.hair_color}</p>
                // <p>Eye Color: {props.character.eye_color}</p>
    //         </div>
    //     </div>
    // );

    return (
        <Col xs='6' md='4' lg='3'>
            <Card>
            <CardHeader>{props.character.name}</CardHeader>
            <CardBody>
                <CardText>Height {props.character.height}</CardText>
                <CardText>Weight {props.character.mass}</CardText>
                <CardText>Year Born {props.character.birth_year}</CardText>
                <CardText>Hair Color {props.character.hair_color}</CardText>
                <CardText>Eye Color {props.character.eye_color}</CardText>
            </CardBody>
            </Card>
        </Col>
        );
    };

export default CharacterCard;