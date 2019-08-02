import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PokemonDetailContainer from '../components/pokemon/pokemon_detail_container';
import PokemonFormContainer from '../components/pokemon/pokemon_form_container';
import ItemFormContainer from '../components/items/item_form_container';
import NotFound from './not_found';

const Root = ({ store }) => {  
  return (
  <Provider store={store}>
    <HashRouter>
    <Route path='/' component={ PokemonIndexContainer } />
      <section className="main-content">
        <Switch>
          <Route exact path='/' component={ PokemonFormContainer } />
          <Route exact path='/pokemon/:pokemonId(\d+)/item' component={ ItemFormContainer } />
          <Route path='/pokemon/:pokemonId(\d+)' component={ PokemonDetailContainer } />
          <Route component={NotFound} />
        </Switch>
      </section>
    </HashRouter>
  </Provider>
  );
};

export default Root;