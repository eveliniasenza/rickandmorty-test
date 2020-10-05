import axios from "axios";
import React, {useState, useEffect} from 'react';
import Characters from "../../components/Characters";
import Episodes from "../../components/Episodes";
import Locations from "../../components/Locations";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search";

export const LOCATIONS = "LOCATIONS"
export const EPISODES = "EPISODES"
export const CHARACTERS = "CHARACTERS"
export const LIMITS = [5, 10, 20]

export const HomeContainer = () => {
  const locationSearch = window.location.search.substring(1);
  const params = new URLSearchParams(locationSearch)
  const [characters, setCharacters] = useState(null);
  const [episodes, setEpisodes] = useState(null);
  const [locations, setLocations] = useState(null);
  const [currentItem, setCurrentItem] = useState(
    (params.get('item') || CHARACTERS).toUpperCase()
  );
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("")
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(20)

  useEffect(() => {
    let path;
    switch (currentItem) {
      case CHARACTERS:
        path = 'character';
        break;
      case LOCATIONS:
        path = 'location'
        break;
      default:
        path = 'episode'
    }

    axios
      .get(`https://rickandmortyapi.com/api/${path}/`, {
        params: {
          name: search,
          page,
          limit
        }
      })
      .then((response) => {
        if (currentItem === LOCATIONS) {
          handleSetLocations(response.data);
        } else if (currentItem === EPISODES) {
          handleSetEpisodes(response.data);
        } else {
          handleSetCharacters(response.data);
        }
    })
  }, [currentItem, search, page, limit])

  const handleSetLocations = (data) => {
    setCharacters(null);
    setEpisodes(null)
    setLocations(data)
  }

  const handleSetEpisodes = (data) => {
    setCharacters(null);
    setEpisodes(data)
    setLocations(null)
  }

  const handleSetCharacters = (data) => {
    setCharacters(data);
    setEpisodes(null)
    setLocations(null)
  }

  if (!characters && !locations && !episodes) {
    return null
  }

  const totalPages =
    characters ? characters.info.pages :
    episodes ? episodes.info.pages :
    locations.info.pages

  return (
    <>
      <Search
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        search={search}
        setSearch={setSearch}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setPage={setPage}
      />
      <div className="container">
        { characters && <Characters characters={characters} /> }
        { episodes && <Episodes episodes={episodes} /> }
        { locations && <Locations locations={locations} /> }
      </div>
      <Pagination
        totalPages={totalPages}
        setPage={(page) => {
          window.scrollTo(0, 0)
          setPage(page)
        }}
        page={page}
        limit={limit}
        setLimit={(limit) => {
          window.scrollTo(0,0)
          setLimit(limit)
        }}
      />
    </>
  );
}
