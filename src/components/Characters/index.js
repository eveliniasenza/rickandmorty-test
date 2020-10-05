import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from "react-bootstrap";
import Card from "../../components/Card";

const Characters = ({ characters }) => {

  return (
    <div>
      <Row>
        {
          characters.results.map((character) => {
            return (
              <Col xs={12} sm={6} md={6} lg={4} key={`character-${character.id}`}>
                <Card
                  title={character.name}
                  image={character.image}
                  to={`/characters/${character.id}`}
                >
                  <div>Status: { character.status }</div>
                  <div>Specie: { character.species }</div>
                  <div>Last know location: { character.location.name }</div>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </div>
  );
}

export default Characters;
