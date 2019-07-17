import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PokemonDetailContainer from '../components/pokemon/pokemon_detail_container';
import PokemonFormContainer from '../components/pokemon/pokemon_form_container';

const Root = ({ store }) => {  
  return (
  <Provider store={store}>
    <HashRouter>
      <Route path='/' component={ PokemonIndexContainer } />
      <section className="main-content">
        <Switch>
          <Route exact path='/' component={ PokemonFormContainer } />
          <Route path='/pokemon/:pokemonId' component={ PokemonDetailContainer } />
        </Switch>
      </section>
    </HashRouter>
  </Provider>
  );
};

export default Root;