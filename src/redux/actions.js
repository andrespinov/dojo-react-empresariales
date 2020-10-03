import Axios from 'axios'

const BuyPokemon = 'BUY_POKEMON'
const ReturnPokemon = 'RETURN_POKEMON'

const FetchPokemonRequest = 'FETCH_POKEMON_REQUEST'
const FetchPokemonSuccess = 'FETCH_POKEMON_SUCCESS'
const FetchPokemonFailure = 'FETCH_POKEMON_FAILURE'

const BuyPokemonActions = (cant) => ({
    type: BuyPokemon,
    payload: cant,
})

const ReturnPokemonActions = (cant) => ({
    type: ReturnPokemon,
    payload: cant
})

// Async Actions
const FetchPokemonRequestAction = () => ({
    type: FetchPokemonRequest,
})

const FetchPokemonSuccessAction = (pokemon) => ({
    type: FetchPokemonSuccess,
    payload: pokemon
})

const FetchPokemonFailureAction = (error) => ({
    type: FetchPokemonFailure,
    payload: error
})

const FetchPokemonAction = (valor) => (dispatch) => {
    dispatch(FetchPokemonRequestAction());
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(response => {
            dispatch(FetchPokemonSuccessAction([response.data]))
        })
        .catch(error => {
            dispatch(FetchPokemonFailureAction("No se encontro el pokemon"))
        })
}

export {
    BuyPokemon,
    ReturnPokemon,
    FetchPokemonRequest,
    FetchPokemonSuccess,
    FetchPokemonFailure,
    BuyPokemonActions,
    ReturnPokemonActions,
    FetchPokemonRequestAction,
    FetchPokemonSuccessAction,
    FetchPokemonFailureAction,
    FetchPokemonAction
}