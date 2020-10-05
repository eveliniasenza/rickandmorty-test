import axios from "axios";
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import Card from "../../components/Card";
import { Row, Col } from 'react-bootstrap'

export const CharacterDetailContainer = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null)
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((response) => {
      setCharacter(response.data)
    })
  }, [id])

  if (!character) {
    return null;
  }

  const episodes = character.episode.map(url => url.split('/').pop())

  return (
    <div className="container">
      <Card
        className="big-card"
        image={character.image}
      >
        <Row>
          <Col xs={12} sm={6}>
            <strong>Name</strong> : {character.name} <br/><br/>
            <strong>Status</strong> : {character.status} <br/><br/>
            <strong>Species</strong> : {character.species} <br/><br/>
            <strong>Gender</strong>: {character.gender}
          </Col>
          <Col xs={12} sm={6}>
            <strong>Origin</strong>: {character.origin.name} <br/><br/>
            <strong>Location</strong> : {character.location.name} <br/><br/>
            <strong>Episodes</strong>:
            { episodes.join(', ') }
          </Col>
        </Row>

      </Card>
    </div>
  )
}
