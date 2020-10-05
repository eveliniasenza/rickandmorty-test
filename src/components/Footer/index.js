import axios from "axios";
import React, {useState, useEffect} from 'react';
import { Icons } from "../icons";
import styles from './footer.module.css';

const Footer = () => {

  const [characters, setCharacters] = useState(null)
  const [episodes, setEpisodes] = useState(null)
  const [locations, setLocations] = useState(null)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/').then((response) => {
      setCharacters(response.data);
    })

    axios.get('https://rickandmortyapi.com/api/episode/').then((response) => {
      setEpisodes(response.data);
    })

    axios.get('https://rickandmortyapi.com/api/location/').then((response) => {
      setLocations(response.data);
    })
  }, [])

  if (locations === null || episodes === null || characters === null) {
    return null
  }

  return (
    <div className={styles['footer']}>
      Character : {characters.info.count} -
      Location : {locations.info.count} -
      Episode : {episodes.info.count}
      <div>
        <Icons/>
      </div>
    </div>
  )}

export default Footer;
