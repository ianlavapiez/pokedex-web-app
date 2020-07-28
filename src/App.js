import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import PokemonList from './components/pokemon-list/pokemon-list.component';
import PokemonDetails from './components/pokemon-details/pokemon-details.page';

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={PokemonList} />
      <Route exact path='/details/:pokemonName' component={PokemonDetails} />
    </Switch>
  );
};

export default App;
