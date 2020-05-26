import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './user'
import { bitesReducer } from './bites'
import { uiReducer } from './ui'

const initialState = {}
const middleware = [thunk]

const reducers = combineReducers({
    user: userReducer,
    bites: bitesReducer,
    ui: uiReducer
})

export const store = createStore(
    reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)