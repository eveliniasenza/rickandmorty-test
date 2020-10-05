import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {CharacterDetailContainer} from "./containers/CharacterDetailContainer";
import {EpisodeDetailContainer} from "./containers/EpisodeDetailContainer";
import {HomeContainer} from "./containers/HomeContainer";
import {LocationDetailContainer} from "./containers/LocationDetailContainer";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <div className= "app">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/characters/:id" component={CharacterDetailContainer} />
          <Route exact path="/episodes/:id" component={EpisodeDetailContainer} />
          <Route exact path="/locations/:id" component={LocationDetailContainer} />
        </Switch>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
