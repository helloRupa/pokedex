import React, { useState } from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PokemonDetailContainer from '../components/pokemon/pokemon_detail_container';
import PokemonFormContainer from '../components/pokemon/pokemon_form_container';

const Root = ({ store }) => {
  let [indexReady, setIndexReady] = useState(false);

  const waitForReady = (indexReady) => {
    if (indexReady) {
      return <Route path='/pokemon/:pokemonId' component={ PokemonDetailContainer } />;
    }
  };
  
  return (
  <Provider store={store}>
    <HashRouter>
      <Route path='/' render={(props) => <PokemonIndexContainer {...props} indexReady={indexReady} setIndexReady={setIndexReady} />}/>
      <section className="main-content">
        <Switch>
          <Route exact path='/' component={ PokemonFormContainer } />
          { waitForReady(indexReady) }
        </Switch>
      </section>
    </HashRouter>
  </Provider>
  );
};

export default Root;