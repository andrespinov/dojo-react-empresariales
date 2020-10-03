import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {GamesReducer, SearchReducer } from './reducer'

// DefaultState
export const defaultGamesState = {
    pokemon: 10,
}
export const initialStateSearch = {
    loading: false,
    pokemon: [],
    error: ''
}

// Store
const rootReducers = combineReducers({
    games: GamesReducer,
    seeker: SearchReducer
})


const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
))


export default store