import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './user'
import { dataReducer } from './data'
import { uiReducer } from './ui'

const initialState = {}
const middleware = [thunk]

const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
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