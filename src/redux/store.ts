import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly"
import textReducer  from './text-reducer'

const reducers = combineReducers ({
    text: textReducer,
})

const composeEnhancers = composeWithDevTools({})
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk)))

export default store