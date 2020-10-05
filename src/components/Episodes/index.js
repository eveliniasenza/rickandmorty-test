import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import Card from "../../components/Card";

const Episodes = ({ episodes }) => {
  return (
    <Row>
      {
        episodes.results.map((episode) => {
          return (
            <Col xs={12} sm={6} md={6} lg={4} key={`episode-${episode.id}`}>
              <Card
                title={episode.name}
                image="/images/episodes_mock.png" // La api de locations, no trae imagenes, asi que usamos una falsa
                to={`/episodes/${episode.id}`}
              >
                <div>AirDate: { episode.air_date }</div>
                <div>Episode: { episode.episode }</div>
              </Card>
            </Col>
          )
        })
      }
    </Row>
)
}
export default Episodes;
