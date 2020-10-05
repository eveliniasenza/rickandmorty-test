import classnames from "classnames";
import {MDBIcon} from "mdbreact";
import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import {EPISODES, LOCATIONS, CHARACTERS} from "../../containers/HomeContainer";
import styles from './Search.module.css';

const Search = ({
  currentItem,
  setCurrentItem,
  setSearch,
  setInputValue,
  inputValue,
  setPage
}) => {
  const onSelect = (ev) => {
    setCurrentItem(ev.target.value)
    setSearch("")
    setInputValue("")
    setPage(1)
  }

  return(
    <div className={styles.container}>
      <div className="d-ib">
        <select
          className={classnames('browser-default custom-select', styles.select)}
          onChange={onSelect}
        >
          <option value={CHARACTERS} selected={currentItem === CHARACTERS}>Characters</option>
          <option value={EPISODES} selected={currentItem === EPISODES}>Episodes</option>
          <option value={LOCATIONS} selected={currentItem === LOCATIONS}>Locations</option>
        </select>
      </div>
      <div className={classnames(styles['input-container'], 'd-ib')}>
        <Form.Control
          type="text"
          className={styles.input}
          onKeyDown={ev => {
            if (ev.key === 'Enter') {
              setSearch(inputValue)
            }
          }}
          onChange={ev => setInputValue(ev.target.value)}
          placeholder="Type to search..."
          value={inputValue}
        />
        <MDBIcon
          onClick={() => setSearch(inputValue)}
          className={styles.icon} icon="search"
        />
      </div>

    </div>
    // <Row>
    //   <Col>
    //     <Form.Control
    //       as="select"
    //       className="my-1 mr-sm-2"
    //       id="inlineFormCustomSelectPref"
    //       custom
    //       onChange={onSelect}
    //     >
    //       <option value={CHARACTERS}>Characters</option>
    //       <option value={EPISODES}>Episodes</option>
    //       <option value={LOCATIONS}>Locations</option>
    //     </Form.Control>
    //   </Col>
    //   <Col>

    //   </Col>
    // </Row>
  )
}

export default Search;
