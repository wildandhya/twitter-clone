import axios from 'axios'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {reduxSoldierMiddleware} from 'redux-soldier'

// reducer
import AuthReducer from './Auth/reducer'
import HomeReducer from './Home/reducer'

// action
export * from './Auth/action'
export * from './Home/action'


export const baseUrl = "http://localhost:2023/"

export const baseAxios = axios.create({
    baseURL:baseUrl,
    timeout:10000
})

const rootReducer = combineReducers({
    AuthReducer,
    HomeReducer
})

export const store = createStore(rootReducer, applyMiddleware(reduxSoldierMiddleware))

