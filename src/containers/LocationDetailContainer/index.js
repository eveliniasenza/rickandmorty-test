import axios from "axios";
import React, {useState, useEffect} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useParams} from "react-router-dom";
import Card from "../../components/Card";

export const LocationDetailContainer = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null)
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`).then((response) => {
      setLocation(response.data)
    })
  }, [id])

  if (!location) {
    return null;
  }

  const residents = location.residents.map(url => url.split('/').pop())

  return (
    <div className="container">
      <Card
        className="big-card"
        image="/images/location_mock.jpg" // La api de locations, no trae imagenes, asi que usamos una falsa
      >
        <Row>
          <Col xs={12} sm={6}>
            <strong>Name</strong> : {location.name} <br/><br/>
            <strong>Type</strong> : {location.type} <br/><br/>
            <strong>Dimension</strong> : {location.dimension} <br/><br/>
          </Col>
          <Col xs={12} sm={6}>
            <strong>Residents</strong>:
            { residents.join(', ') }
          </Col>
        </Row>

      </Card>
    </div>
  )
}
