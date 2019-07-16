import * as APIUtil from '../util/api_util';
import { receiveItems } from './items_actions';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
  pokemon: pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPokemon = (id) => (dispatch) => (
  APIUtil.fetchPokemon(id)
    .then((pokemon) => {
      dispatch(receivePokemon(pokemon.pokemon));

      if (pokemon.items) {
        dispatch(receiveItems(pokemon.items));
      }
    })
);

export const createPokemon = (data) => (dispatch) => (
  APIUtil.createPokemon(data)
    .then((pokemon) => dispatch(receivePokemon(pokemon.pokemon)))
);