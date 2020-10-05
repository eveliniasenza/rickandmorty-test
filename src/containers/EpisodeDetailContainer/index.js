import axios from "axios";
import React, {useState, useEffect} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import { useParams } from 'react-router-dom'

export const EpisodeDetailContainer = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null)
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/${id}`).then((response) => {
      setEpisode(response.data)
    })
  }, [id])

  if (!episode) {
    return null;
  }

  const characters = episode.characters.map(url => url.split('/').pop())


  return (
    <div className="container">
      <Card
        className="big-card"
        image="/images/episodes_mock.png" // La api de locations, no trae imagenes, asi que usamos una falsa
      >
        <Row>
          <Col xs={12} sm={6}>
            <strong>Name</strong> : {episode.name} <br/><br/>
            <strong>Airdate</strong> : {episode.air_date} <br/><br/>
            <strong>Episode</strong> : {episode.episode} <br/><br/>
          </Col>
          <Col xs={12} sm={6}>
            <strong>Characters</strong>:
            { characters.join(', ') }
          </Col>
        </Row>

      </Card>
    </div>
  )
}
