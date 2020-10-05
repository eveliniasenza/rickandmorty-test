import React from 'react';
import classnames from 'classnames'
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import styles from './Card.module.css'

const Card = ({title, to, children, image, className}) => {
  return (
    <Link to={to} className={classnames(styles.card, className)}>
      <Row>
        <Col xs={12} sm={4} className={styles['col-padding']}>
          <div
            className={classnames(styles.image, 'card-image')}
            style={{
              backgroundImage: `url(${image})`
            }}
          />
        </Col>
        <Col xs={12} sm={8}>
          <div className={styles.content}>
            { title && (
              <h3>{ title }</h3>
            ) }

            {children}
          </div>
        </Col>
      </Row>
    </Link>
  )
}

export default Card;
