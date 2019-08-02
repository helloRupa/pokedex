import * as APIUtil from '../util/api_util';
import { receiveItems } from './items_actions';
import * as Load from './loading_actions';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const RECEIVE_POKEMON_ERRORS = 'RECEIVE_POKEMON_ERRORS';
export const CLEAR_POKEMON_ERRORS = 'CLEAR_POKEMON_ERRORS';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
  pokemon
});

export const receivePokemonErrors = (errors) => ({
  type: RECEIVE_POKEMON_ERRORS,
  errors
});

export const clearPokemonErrors = () => ({
  type: CLEAR_POKEMON_ERRORS,
  errors: []
});

export const requestAllPokemon = () => (dispatch) => {
  dispatch(Load.startLoadingAllPokemon);

  return APIUtil.fetchAllPokemon()
    .then(pokemon => {dispatch(receiveAllPokemon(pokemon)); console.log(pokemon); console.log(pokemon.pokemon);},
    (err) => console.log(err.responseJSON))
};

export const requestPokemon = (id) => (dispatch) => {
  dispatch(Load.startLoadingSinglePokemon);

  return APIUtil.fetchPokemon(id)
    .then((pokemon) => {
      dispatch(receivePokemon(pokemon.pokemon));

      if (pokemon.items) {
        dispatch(receiveItems(pokemon.items));
      }
    },
    (errors) => {
      dispatch(receivePokemonErrors(errors.responseJSON));
      $.Deferred().reject(errors.responseJSON);
    });
};

export const createPokemon = (data) => (dispatch) => (
  APIUtil.createPokemon(data)
    .then((pokemon) => {
      dispatch(receivePokemon(pokemon.pokemon));
      return pokemon.pokemon;
    }, (errors) => {
      dispatch(receivePokemonErrors(errors.responseJSON));
    })
);

export const updatePokemon = (data, id) => (dispatch) => (
  APIUtil.updatePokemon(data, id)
    .then((pokemon) => {
      dispatch(receivePokemon(pokemon.pokemon));
      return pokemon.pokemon;
    }, (errors) => {
      dispatch(receivePokemonErrors(errors.responseJSON));
    })
);
